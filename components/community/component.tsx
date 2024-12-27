import { useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Helper } from "@/lib/helper";
import { BaseApi } from "@/api/baseApi";
import { error } from "console";
import { useTranslations } from "next-intl";

interface ComponentProps {
    label: any;
    col_field: string;
    col_length?: any;
    col_type?: any;
    ref_table?: any
    formData: any;
    onChange: (field: any, value: any) => any;
    errors: any[]
    col_nullable: any;
}
const FormComponent = ({ label, col_field, col_length, col_type, ref_table, formData, onChange, errors = [], col_nullable }: ComponentProps) => {
    const trns = useTranslations("community")
    const [refList, setRefList] = useState<any>([])
    useEffect(() => {

        if (col_type === 'manyToOne') {
            getRef()
        }
    }, [])

    const getRef = async () => {
        try {
            const data = await BaseApi._get(`list/9/${ref_table}`)
            setRefList(data)
        } catch (error) {
            Helper.handleError(error)
        }
    }
    const handleInputChange = (e: any) => {
        console.log('--e', e.target.value)
        onChange(col_field, e.target.value)

    }
    const handleCheckboxChange = (e: any) => {
        onChange(col_field, e)
    }
    const handleSelectChange = (e: any) => {
        onChange(col_field, e.target.value)
    }
    const isError = () => {
        return errors.findIndex(e => e.name === col_field) > -1
    }

    const RenderInput = () => {
        if (col_type === 'string') {
            return (<input placeholder={trns('inputPlaceHolder')} type="text"
                value={formData[col_field]} onChange={handleInputChange}
                className={` border  ${isError() ? 'border-red-500' : 'border-gray-200'} rounded-md text-md px-3 py-1 w-full hover:border-primary outline-none focus:bg-gray-200`}
            />
            )
        } else if (col_type === 'manyToOne') {
            return (<select onChange={handleSelectChange} value={formData[col_field]} className={` border  ${isError() ? 'border-red-500' : 'border - gray - 200'} rounded-md text-md px-3 py-1 w-full hover:border-primary outline-none  focus:bg-gray-200`
            } >
                <option key={887} value="">{trns("selectOption")}</option>
                {
                    refList.map((r: any, index: number) => {
                        return (
                            <option key={index} value={r._id}>{r.name} </option>
                        )
                    })
                }
            </select >
            )
        } else if (col_type === 'boolean') {
            return (
                <Checkbox className={`${isError() ? 'outline outline-red-500' : ''}`} value={formData[col_field]} onCheckedChange={handleCheckboxChange} />
            )
        } else {
            return (<>-</>)
        }

    }
    return (
        <div className="flex flex-col gap-2">
            <p className={`${isError() ? 'text-red-500' : ''}`}>
                {col_nullable === false && <span className="text-red-500">* &nbsp;</span>}
                {label}</p>
            {RenderInput()}
        </div>
    )


}

export default FormComponent;