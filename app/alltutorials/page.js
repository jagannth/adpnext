import { getAllData } from '../../api/proxyservice'
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AllTutorials from '../../components/AllTutorials'

async function getCourse() {
    // const response = await fetch(`${baseUrl}course/all`);
    const response = await getAllData('course/all');
    if (response.status === false) notFound();
    return response?.data;
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
            <Header name="home" />
            <AllTutorials data={_courses} articles={[]} colors={colorsList} />
            <Footer name="home" />
        </div>
    )
}
