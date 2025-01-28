import type { Metadata } from "next";
//Etiquetas de meta para SEO
export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords:['Abaut page', 'Tania', 'información', '...']
};

export default function AboutPage(){
    return(
        <>
            <span className="text-5xl">About page</span>
        </>
    )
}