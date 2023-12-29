let firstName:string="fruit"
let count:number=0
let isLoading:boolean=true
let numbers:undefined=undefined
let age:null|string=null


const user:{name:string,age:number,id?:number}={
    name:"surenra",
    age:24,
   
}

//array

const fruits:string[]=["bnana","apple","orange"]
const num:number[]=[1,2,3,4,5]
const users:{id:number,name:string}[]=[{id:1,name:""},{id:1,name:""}]

//functions  

const sum=()=>{
    

}
sum()

const handleApiResponse=(payload:{userId:number},callback:()=>void)=>{

}

handleApiResponse({userId:1},sum)






interface Person{
    department:string
}
interface User extends Person{
    name:string;
    id:number,
    getUser:()=>void

}


let data:User={
    name:"fruits",
    id:1,
    getUser:()=>{

    },
    department:''
}

type employee={
    id:number,
    name:string

}
type manager={
    department:string



} &employee 

let employeewithmanager:manager={
department:"A",
id:2,
name:"surea"

}



















