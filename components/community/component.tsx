import { useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { useTranslations } from "next-intl";

interface ComponentProps {
    label: any;
    columns?: any;
    col_field: string;
    col_length?: any;
    col_type?: any;
    ref_table?: any
    formData: any;
    onChange: (field: any, value: any) => any;
    errors: any[]
    col_nullable: any;
    field_show_trigger?: any;
    unitedRefs?: any;
    description?: any;
}
const FormComponent = ({ description, columns = [], label, col_field, col_length, col_type, ref_table, formData, onChange, errors = [], col_nullable, field_show_trigger, unitedRefs }: ComponentProps) => {
    const trns = useTranslations("community")
    const [refList, setRefList] = useState<any>([])
    // useEffect(() => {
    //     if (col_type === 'manyToOne') {
    //         getRef()
    //     }
    // }, [])

    // const getRef = async () => {
    //     try {
    //         const data = await BaseApi._get(`list/9/${ref_table}`)
    //         setRefList(data)
    //     } catch (error) {
    //         Helper.handleError(error)
    //     }
    // }
    useEffect(() => {
        if (unitedRefs) {
            const t = unitedRefs[ref_table]
            if (t) {
                setRefList(t)
            }
        }
    }, [unitedRefs])
    const handleInputChange = (e: any) => {
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
        let InputItem: any = null
        if (field_show_trigger) {
            try {
                const { field, value, type, operation } = field_show_trigger;
                const a = field.split('.')
                const watchFieldName = a[0]
                const watchData = formData[watchFieldName]
                if (!watchData) return;
                const configField = columns.find((r: any) => r.col_field === watchFieldName)
                if (configField) {
                    const valueToEq = unitedRefs[configField.ref_table].find((rf: any) => rf[a[1]] === value)
                    if (!valueToEq || watchData !== valueToEq._id) {
                        return
                    }
                }
            } catch (error) {
                console.error('render error: ', error)
            }
        }
        if (col_type === 'string') {
            InputItem = <input placeholder={trns('inputPlaceHolder')} type="text"
                value={formData[col_field]} onChange={handleInputChange}
                className={` border  ${isError() ? 'border-red-500' : 'border-gray-200'} rounded-md text-md px-3 py-1 w-full hover:border-primary outline-none focus:bg-gray-200`}
            />

        } else if (col_type === 'manyToOne') {
            InputItem = (<select onChange={handleSelectChange} value={formData[col_field]} className={` border  ${isError() ? 'border-red-500' : 'border - gray - 200'} rounded-md text-md px-3 py-1 w-full hover:border-primary outline-none  focus:bg-gray-200`
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
            InputItem = (
                <Checkbox className={`${isError() ? 'outline outline-red-500' : ''}`} value={formData[col_field]} onCheckedChange={handleCheckboxChange} />
            )
        } else {
            InputItem = <>-</>
        }

        return (<div className="flex flex-col gap-2">
            <div className={`${isError() ? 'text-red-500' : ''}`}>
                {col_nullable === false && <span className="text-red-500">* &nbsp;</span>}
                {label}</div>
            {InputItem}
            {description &&
                <div className="text-gray-400 text-xs">  {description}</div>
            }
        </div>
        )

    }
    return RenderInput()


}

export default FormComponent;