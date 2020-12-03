import './style.scss';


function getQueryParams() {
    let temp = new URLSearchParams(window.location.search)
    let paramObj = {}
    for (var value of temp.keys()) {
        paramObj[value] = temp.get(value);
    }
    return paramObj;
}


export default function Demo() {

    
    let queryParam = getQueryParams();
    return (
        <main className="demopage">
            <pre>
                {JSON.stringify(queryParam)}
            </pre>
        </main>
    )
}