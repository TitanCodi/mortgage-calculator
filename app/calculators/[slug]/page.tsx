import MainCalculator from "@/components/calculator/MainCalculator"

const calculatorContent:any = {

"mortgage-calculator-extra-payments":{
title:"Mortgage Calculator With Extra Payments",
description:"Calculate how extra payments reduce mortgage interest and loan term."
},

"biweekly-mortgage-calculator":{
title:"Biweekly Mortgage Calculator",
description:"Estimate how biweekly payments shorten mortgage payoff."
},

"mortgage-payoff-calculator":{
title:"Mortgage Payoff Calculator",
description:"Calculate how quickly you can pay off your mortgage."
},

"loan-calculator":{
title:"Loan Calculator",
description:"Estimate monthly loan payments and interest."
},

"car-loan-calculator":{
title:"Car Loan Calculator",
description:"Calculate car loan payments and total interest."
}

}

export default function Page({ params }: { params: { slug: string } }) {

const data = calculatorContent[params.slug]

if(!data){
return <h1>Calculator Not Found</h1>
}

return(

<main style={{maxWidth:"1100px",margin:"40px auto"}}>

<h1>{data.title}</h1>

<p>{data.description}</p>

<MainCalculator/>

<section style={{marginTop:"40px"}}>

<h2>About This Calculator</h2>

<p>
This financial calculator helps estimate payments,
interest costs and payoff timelines.
</p>

</section>

</main>

)

}

export function generateStaticParams(){

return [

{slug:"mortgage-calculator-extra-payments"},
{slug:"biweekly-mortgage-calculator"},
{slug:"mortgage-payoff-calculator"},
{slug:"loan-calculator"},
{slug:"car-loan-calculator"}

]

}