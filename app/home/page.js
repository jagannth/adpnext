import { notFound } from "next/navigation";
import { getAllData } from "../../services/proxyservce";
import HomeLanding from '../../components/HomeLanding'
import HomeAbout from '../../components/HomeAbout'
import Tutorials from '../../components/Tutorials'
import Subscribe from '../../components/Subscribe'
import HomeCategory from '../../components/HomeCategory'

async function getCourse() {
    const response = await getAllData('course/all');
    if (response.status === false) notFound();
    return response?.data;
    // return [];
}
async function getCategories(data) {
    const groupedData = groupBy(data, "category");
    const catergories = groupedData.then((res) => {
        const groupsArray = Object.entries(res);
        return groupsArray;
    })
    return catergories;
};
async function groupBy(array, key) {
    return array.reduce((result, currentValue) => {
        const nestedKey = currentValue[key][0].name;
        (result[nestedKey] = result[nestedKey] || []).push(currentValue);
        return result;
    }, {});
};

export default async function HomePro() {
    const _courses = await getCourse();
    const _categories = await getCategories(_courses);
    const colorsList = ['bg-info-subtle']
    // const colorsList = ['bg-primary-subtle', 'bg-success-subtle', 'bg-danger-subtle', 'bg-warning-subtle', 'bg-info-subtle']
    return (
        <div>
            <HomeLanding data={_courses} colors={colorsList} />
            <HomeCategory />
            <Tutorials categories={_categories} />
            <HomeAbout />
            <Subscribe />
        </div>
    )
}
