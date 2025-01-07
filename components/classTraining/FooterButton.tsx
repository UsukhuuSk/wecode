import { ArrowRight01Icon, Rocket01Icon } from "@hugeicons/react";

export default function CLFooterButton() {

    return (
        <div className="h-12 w-12  absolute  z-10">
            <button className="hover-button h-12 w-12 rounded-full bg-slate-700 hover:bg-primary transition-colors">
                <Rocket01Icon variant="solid" className=" button-icon" />
            </button>
        </div>
    )
}

