import React, { useState, useEffect } from 'react'
import Collapsible from 'react-collapsible'
import './NewsCard.css'

const NewsCard = () => {

    const [newsType, setNewsType] = useState('apple')
    const [lang, setNewLang] = useState('de')
    const [newsArr, setNewsArr] = useState([])


    const handleChange = (newValue) => {
        setNewLang(newValue)
    }


    useEffect(() => {
        // let loaded = true
        console.log("Inhalt wurde neu gerendert");

        fetch(`https://newsapi.org/v2/everything?q=${newsType}&language=${lang}&sortBy=popularity&apiKey=ceb65a2f9f8c4febad5a5af02d864573`)
            .then(response => response.json())
            .then(json => {
                // if (loaded) {
                console.log(json.articles);
                setNewsArr(json.articles)
            })
        // })

        // return () => {
        //     loaded = false;
        //     console.log('process stopped');
        // }

    }, [newsType, lang])

    return (
        <>
            <section>
                <article className="middle">
                    <button onClick={() => setNewsType('apple')}> Apple</button>
                    <button onClick={() => setNewsType('tesla')}>Tesla</button>
                    <button onClick={() => setNewsType('war')}>War</button>

                    <select name="" id="" onChange={(e) => handleChange(e.target.value)} value={lang} >
                        <option value='de' >Deutsch</option>
                        <option value='en'>Englisch</option>
                        <option value='fr'>Französisch</option>
                    </select>

                    <input type="text" name="" id="" />
                </article>

                <div className="flex">
                    {newsArr.map((items) => (


                        <article className="cards">

                            <img src={items.urlToImage} onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/schwarz.jpeg";
                            }} alt="pic" />


                            <h1>{items.title}</h1>

                            <Collapsible trigger="Start">
                                <p>{items.description.slice(0, 150)}</p>
                                <p>{items.publishedAt}</p>
                                <a href={items.url}>Read more</a>
                            </Collapsible>

                        </article >
                    ))}
                </div>
            </section>
        </>
    )
}

export default NewsCard
