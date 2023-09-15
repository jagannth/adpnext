import { notFound } from 'next/navigation';
import AllTutorials from '../../components/AllTutorials';
import { getAllData } from "../../services/proxyservce";

async function getCourse() {
    // const response = await fetch(`${baseUrl}course/all`);
    const response = await getAllData('course/all');
    if (response.status === false) notFound();
    return response?.data;
    // return [];
}

export const metadata = {
    title: 'Additional Sheet | HTML, CSS, SASS, Bootstrap, Tailwind CSS, Pure CSS, Ant Design, Semantic UI, Materialize, Javascript, JQuery, Vuejs, Nextjs, Flutter, Ionic, .Net, Java, Python, Php, SQL, Azure, AWS, Google could , React, Angular etc.',
    description: 'Learn web development from scratch with our comprehensive course. Gain practical skills in HTML, CSS, JavaScript, and more. Enroll now and start building your own websites today!',
}

export default async function page() {
    const _courses = await getCourse();
    const colorsList = ['bg-info-subtle']
    // const colorsList = ['bg-primary-subtle', 'bg-success-subtle', 'bg-danger-subtle', 'bg-warning-subtle', 'bg-info-subtle']
    return (
        <div>
            <AllTutorials data={_courses} articles={[]} colors={colorsList} />
        </div>
    )
}
