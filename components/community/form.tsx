import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"
import { Helper } from "@/lib/helper"
import { BaseApi } from "@/api/baseApi"
import FormComponent from "./component"
import * as Dialog from '@radix-ui/react-dialog';
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Loading03Icon } from "@hugeicons/react";


interface FormProps {
    type?: any
}
const CommunityForm = forwardRef(({ type }: FormProps, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const { locale } = useParams()

    const trns = useTranslations("community")
    const [config, setConfig] = useState<any>(null)
    const [formData, setFormData] = useState<any>({})
    const [saving, setSaving] = useState<boolean>(false)
    const [errors, setErrors] = useState<any>([])
    const [groupFields, setGroupFields] = useState<any>([])
    const [loading, setLoading] = useState<any>(false)
    const [open, setOpen] = useState<boolean>(false)
    const [unitedRefs, setUnitedRefs] = useState<any>([])

    useImperativeHandle(ref, () => ({
        openForm
    }));

    useEffect(() => {
        if (config) {
            getRefs()
        }
    }, [config])

    const openForm = async (table: string) => {
        if (table) {
            await getConfig(table)
            setOpen(true)
        }
    }

    const handleClose = () => {
        setOpen(false)
    }

    const clearFormData = (columns: any) => {
        const formObj: any = {}
        for (const col of columns) {
            if (col.col_type === 'string') {
                formObj[col.col_field] = ''
            } else if (col.col_type === 'boolean') {
                formObj[col.col_field] = false
            } else if (col.col_type === 'manyToOne') {
                formObj[col.col_field] = null
            }
        }
        setFormData(formObj)
    }


    const getRef = async (ref_table: any) => {
        try {
            return await BaseApi._get(`list/9/${ref_table}`)
        } catch (error) {
            Helper.handleError(error)
        }
    }

    const getRefs = async () => {
        try {
            const tempUnited: any = {}
            for (const c of config.columns) {
                if (c.col_type === 'manyToOne' && c.ref_table) {
                    const data = await getRef(c.ref_table)
                    tempUnited[c.ref_table] = data
                }
            }
            setUnitedRefs(tempUnited)
        } catch (error) {
            Helper.handleError(error)
        }
    }

    const getConfig = async (table: string) => {
        if (!table) return;
        try {
            setLoading(true)
            const data: any = await BaseApi._get(`config/table/9/${table}`)
            setConfig(data)
            setGroupFields(data.config_group_fields)
            clearFormData(data.columns)
        } catch (error) {
            Helper.handleError(error)
        } finally {
            setLoading(false)

        }
    }

    const handleChange = (field: any, value: any) => {
        setFormData((prev: any) => ({
            ...prev,
            [field]: value,
        }));
    }
    const handleValidate = () => {
        const temperrors = []
        for (const col of config.columns) {
            if (!col.col_nullable && col.col_hidden === false && !formData[col.col_field]) {
                temperrors.push({ name: col.col_field, text: 'Утга шаардана.' })
            }
        }
        setErrors(temperrors)
        return temperrors.length === 0
    }
    const handleConfirm = async () => {
        try {
            const isValid = handleValidate()
            if (!isValid) {
                Helper.handleWarning('Бүртгэлийн мэдээлэл гүйцэт бөглөнө үү.')
                return
            };
            setSaving(true)
            await BaseApi._post('9/com_agent_requests', formData)
            await Helper.wait()
            Helper.handleInfo("Таны хүсэлт илгээгдлээ.")
            handleClose()
            clearFormData(config.columns)
        } catch (error) {
            Helper.handleError(error)
        } finally {
            setSaving(false)
        }
    }

    const RenderForm = () => {
        return (
            <div className="flex flex-col gap-4 p-1 md:p-4">
                {
                    groupFields.map((g: any, index: any) => {
                        return (
                            <div key={index} className="border rounded-xl p-4 bg-gray-100">
                                <p className="font-bold mb-4 text-xl">{locale === 'en' ? g.title_en : g.title_mn}</p>
                                <div className="flex flex-col gap-4">
                                    {
                                        g.group_columns.map((col: any, itemIndex: any) => {
                                            return <FormComponent
                                                columns={config.columns}
                                                unitedRefs={unitedRefs}
                                                key={itemIndex}
                                                errors={errors}
                                                onChange={handleChange}
                                                description={locale === 'en' ? col.description_en : col.description_mn}
                                                formData={formData}
                                                label={locale === 'en' ? col.title_en : col.title_mn}
                                                col_field={col.col_field}
                                                col_type={col.col_type}
                                                ref_table={col.ref_table}
                                                col_nullable={col.col_nullable}
                                                field_show_trigger={col.field_show_trigger}
                                            />
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
    return (
        <>

            {loading && <div className="fixed inset-0 w-full min-h-screen bg-[#00000070] z-[250] flex flex-col items-center justify-center">
                <Loading03Icon className="animate-spin text-white" />
                <p className="text-white">{locale === 'en' ? 'Loading...' : 'Уншиж байна...'}</p>
            </div>}
            <Dialog.Root open={open} onOpenChange={handleClose}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50 z-[998]" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 md:p-5 rounded-lg z-[999] shadow-lg  w-[90%] md:w-auto">
                        <Dialog.Title className="text-xl mb-4">{trns("dialogTitle")}</Dialog.Title>
                        <Dialog.Description className="text-base mb-6 max-h-[75vh] overflow-auto" ref={contentRef} >
                            {config && RenderForm()}
                        </Dialog.Description>
                        <div className="flex gap-4 justify-center">
                            {
                                !loading && <button className="px-4 py-2 rounded-md bg-primary text-white font-semibold disabled:animate-pulse disabled:bg-gray-400 text-xl" onClick={handleConfirm} disabled={saving}>{
                                    saving ? trns("saving") : trns("submit")
                                }</button>
                            }
                            <button className="px-4 py-2 rounded-md  text-black font-semibold disabled:animate-pulse disabled:bg-gray-400 text-xl" onClick={handleClose} disabled={saving}>{
                                trns("close")
                            }</button>
                        </div>
                        <Dialog.Close asChild>
                            {
                                <button className="btn-close">
                                </button>
                            }
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
            {/* <Dialog title="Form" isOpen={open} onClose={handleClose}>
                {
                    config && <>
                        <div>
                            {
                                config.columns.filter((col: any) => col.col_hidden === false).map((col: any) => {
                                    return <FormComponent label={col.col_title} col_field={col.col_field} />
                                })
                            }
                        </div>
                    </>
                }

            </Dialog> */}
        </>
    )
})
CommunityForm.displayName ='community-form'
export default CommunityForm