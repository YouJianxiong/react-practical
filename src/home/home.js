import './home.css';
import {Link} from "react-router-dom";
import Example1 from "../example-1/example-1";

function Home() {
    let routeConfig =[
        {title:'Example 1 (Http Request)', content: 'This example shows the http request between pre-end and back-end',
        examples: [{title: 'Ajax', url: 'https://www.w3schools.com/xml/ajax_intro.asp'}
        ,{title: 'Axios 1', url: 'https://github.com/axios/axios#features'}
        ,{title: 'Axios 2', url: 'https://www.npmjs.com/package/react-axios'}]},
    ];

    return (
        <div className="home">
            <h2>This project used to show examples for React</h2>
            {
                routeConfig.map((item,index)=>{
                    return (
                        <div key={index}>
                            <h3>{item.title}</h3>
                            <blockquote>
                                <p>{item.content}</p>
                                {item.examples.map((ex, i) => {
                                    return (<div key={i}><a href={ex.url}><em>{i + 1}. </em>{ex.title}</a></div>)
                                })}
                            </blockquote>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Home;