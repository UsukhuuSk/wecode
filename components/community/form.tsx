import { useEffect, useRef, useState } from "react"
import { Helper } from "@/lib/helper"
import { BaseApi } from "@/api/baseApi"
import FormComponent from "./component"
import * as Dialog from '@radix-ui/react-dialog';
import { useTranslations } from "next-intl";
import { error } from "console";


interface FormProps {
    open: boolean,
    handleClose: () => any
    table?: any
}
const CommunityForm = ({ open, handleClose, table }: FormProps) => {
    const contentRef = useRef<HTMLDivElement>(null);

    const trns = useTranslations("community")
    const [config, setConfig] = useState<any>(null)
    const [formData, setFormData] = useState<any>({})
    const [saving, setSaving] = useState<boolean>(false)
    const [errors, setErrors] = useState<any>([])
    const [groupFields, setGroupFields] = useState<any>([])
    const [loading, setLoading] = useState<any>(false)



    useEffect(() => {
        if (table)
            getConfig()
    }, [table])

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

    const getConfig = async () => {
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
            <div className="flex flex-col gap-4 p-4">
                {
                    groupFields.map((g: any, index: any) => {
                        return (
                            <div key={index} className="border rounded-xl p-4 bg-gray-100">
                                <p className="font-bold mb-4 text-xl">{g.title_mn}</p>
                                <div className="flex flex-col gap-4">
                                    {
                                        config.columns.filter((col: any) => g.group_columns.some((groupCol: any) => groupCol.col_field === col.col_field)).map((col: any, itemIndex: any) => {
                                            return <FormComponent
                                                key={itemIndex}
                                                errors={errors}
                                                onChange={handleChange}
                                                formData={formData}
                                                label={col.col_title}
                                                col_field={col.col_field}
                                                col_type={col.col_type}
                                                ref_table={col.ref_table}
                                                col_nullable={col.col_nullable} />
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
            <Dialog.Root open={open} onOpenChange={handleClose}>
                <Dialog.Portal>
                    <Dialog.Overlay className="dialog-overlay" />
                    <Dialog.Content className="dialog-content  w-[90%] md:w-auto">
                        <Dialog.Title className="dialog-title">{trns("dialogTitle")}</Dialog.Title>
                        <Dialog.Description className="dialog-description" ref={contentRef} >
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
}

export default CommunityForm