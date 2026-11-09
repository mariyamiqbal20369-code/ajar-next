type CustomButtonProps = {
    label: string;
}
export default function CustomButton
({
    label 
}: CustomButtonProps){
        return(
    <main className="p-8">
        <button className="rounded-full bg-red-700 py-3 px-3 text-white">{label}</button>


    </main>
    );
    
    
}