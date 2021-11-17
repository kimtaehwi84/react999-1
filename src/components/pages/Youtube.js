import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';
import YoutubeList from '../info/YoutubeList';
import ContInfo from '../layouts/ContInfo';
import WrapTitle from '../layouts/WrapTitle';
import YoutubeSearch from '../info/YoutubeSearch';

function Youtube() {
    const [videos, setVideos] = useState([]);
    const start = () => {
        setTimeout(() => {
        }, 2000);
    }
    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyBRaIs9S1cu9wRcLFiUuelmE_Tv-kNxkOg&maxResults=30`, requestOptions)
        .then(response => response.json())
        //.then(result => console.log(result.items))
        .then(result => setVideos(result.items))
        .catch(error => console.log('error', error));
    }

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=직키픽&key=AIzaSyBRaIs9S1cu9wRcLFiUuelmE_Tv-kNxkOg&maxResults=30", requestOptions)
        .then(response => response.json())
        //.then(result => console.log(result.items))
        .then(result => {
            setVideos(result.items);
            start();
        })
        .catch(error => console.log('error', error));
    }, []);
    return (
        <div>
            <Loading />
            <Header />
            <Contents>
                <section id="youtubeCont">
                    <div className="container">
                        <WrapTitle text={["youtube", "reference"]} />
                        <div className="youtube__cont">
                            <YoutubeSearch onSearch={search} />
                            <div className="youtube">
                                <YoutubeList videos={videos} />
                            </div>
                        </div>
                    </div>
                </section>
                <ContInfo />
            </Contents>
            <Footer />
        </div>
    )
}
export default Youtube;