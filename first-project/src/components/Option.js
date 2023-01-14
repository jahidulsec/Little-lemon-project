
export default function Option({time}) {

    return time.map((t,index)=> (
            <option key={index} value={t}>{t}</option>
        ));
}