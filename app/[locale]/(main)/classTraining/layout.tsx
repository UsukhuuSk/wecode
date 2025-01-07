import { BlogProvider } from "@/context/BlogContext";
import { ClassTrainingProvider } from "@/context/ClassTrainingContext";
import { ReactLenis } from "@/lib/lenis";


const ClassTrainingLayout = ({ children }: any) => {

    return (
        <ReactLenis root>
            <ClassTrainingProvider>
                {children}
            </ClassTrainingProvider>
        </ReactLenis>
    )
}

export default ClassTrainingLayout;