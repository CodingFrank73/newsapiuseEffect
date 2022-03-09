import React, { useState, useEffect } from 'react'
import './NewsCard.css'

const NewsCard = () => {

    const [newsType, setNewsType] = useState('apple')
    // const [lang, setNewLang] = useState(['de', 'en', 'fr'])
    const [newsArr, setNewsArr] = useState([])


    // const Add = lang.map(Add => Add)

    // const handleAddrTypeChange = (e) => {
    //     console.log((lang[e.target.value]));
    //     setNewLang(lang[e.target.value])

    // }


    useEffect(() => {
        let loaded = true
        console.log("Inhalt wurde neu gerendert");

        fetch(`https://newsapi.org/v2/everything?q=${newsType}&language=de&sortBy=popularity&apiKey=ceb65a2f9f8c4febad5a5af02d864573`)
            .then(response => response.json())
            .then(json => {
                if (loaded) {
                    console.log(json.articles);
                    setNewsArr(json.articles)
                }

            })

        console.log(newsArr);

        return () => {
            loaded = false;
            console.log('process stopped');
        }

    }, [newsType])

    return (
        <>
            <section>
                <article className="middle">
                    <button onClick={() => setNewsType('apple')}> Apple</button>
                    <button onClick={() => setNewsType('tesla')}>Tesla</button>
                    <button onClick={() => setNewsType('war')}>War</button>

                </article>

                <div className="flex">
                    {newsArr.map((items) => (
                        <article className="cards">
                            <img src={items.urlToImage} alt="pic" />
                            <h1>{items.title}</h1>
                            <p>{items.description}</p>
                            <p>{items.publishedAt}</p>
                            <a href="">Read more</a>
                        </article >
                    ))}
                </div>
            </section>
        </>
    )
}

export default NewsCard


{/* <select name="" id="" value={lang} onChange={e => setNewLang(e.target.value)}>
                        {lang.map((addres) => {
                            <option key={addres} value={addres}>{addres}</option>
                            console.log(lang);
                        })} */}



{/* <option value="de">Deutsch</option>
                        <option value="en">Englisch</option>
                        <option value="fr">Französisch</option> */}