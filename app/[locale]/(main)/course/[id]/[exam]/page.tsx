import { ServerApi } from "../../../../../../api/serverApi";
import ExamClientPage from "../../../../../../components/course/exam/ExamClientPage";


export default function Page({ params }: { params: { id: number, exam: number, locale: any } }) {
    return <ExamClientPage />;
}