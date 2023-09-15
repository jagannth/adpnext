import { getAllData } from "../../../services/proxyservce";
import Category from "../../../components/Category";


async function getCategoryByRouteName(name) {
    // const data = await fetch(process.env.baseUrl + 'course/category/' + name);
    // console.log(process.env.baseUrl);
    // return await data.json();
    const response = await getAllData('name/category/' + name, 1);
    // if (response.status === false) notFound();
    return response?.data;
    // return {};
}

async function getCourseByCateId(id) {
    const response = await getAllData('course/category/' + id, 1);
    // if (response.status === false) notFound();
    return response?.data;
    // return [];
    // const data = await fetch(process.env.baseUrl + 'course/category/' + id);
    // // console.log(data);
    // return await data.json();
};

export const metadata = {
    title: 'Additional Sheet | Tutorial library for Web Development',
    description: 'Tutorial library for Designing, web development, mobile development, server side development, .net frameworks, dtabases, cloud etc.',
}


export default async function page({ params: params }) {
    console.log('params', params);
    const _category = await getCategoryByRouteName(params?.name);
    const _course = await getCourseByCateId(_category?._id);
    return (
        <div>
         <Category category={_category} course={_course}/>
        </div>
    )
}
