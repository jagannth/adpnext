import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Category from '../../../components/Category';
import { getAllData } from "../../../services/proxyservce";

async function getCategoryByRouteName(name) {
    // const response = await fetch(`${baseUrl}course/all`);
    const response = await getAllData('name/category/' + name);
    if (response.status === false) notFound();
    return response?.data;
    // return {};
}

async function getCourseByCateId(id) {
    const response = await getAllData('course/category/' + id);
    if (response.status === false) notFound();
    return response?.data;
    // return [];
};

export const metadata = {
    title: 'Additional Sheet | Tutorial library for Web Development',
    description: 'Tutorial library for Designing, web development, mobile development, server side development, .net frameworks, dtabases, cloud etc.',
}


export default async function page({ params:params }) {
    // console.log('route',params);
    const _category = await getCategoryByRouteName(params.route);
    const _course = await getCourseByCateId(_category?._id);
    return (
        <div>
            <Header name="home" />
            <Category category={_category} course={_course} />
            <Footer name="home" />
        </div>
    )
}
