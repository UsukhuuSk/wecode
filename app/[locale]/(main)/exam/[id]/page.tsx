import ExamClientPage from "../../../../../components/course/exam/ExamClientPage";


export default async function Page({ params }: { params: { id: number, exam: number, locale: any } }) {
    return <ExamClientPage />;
}