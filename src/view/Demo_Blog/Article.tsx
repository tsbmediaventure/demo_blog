import React from 'react';
import Header from './Header';
import style from './article.module.scss';
import topImg from '../../assets/blog/Story/Humanoid.jpg';
import smallImg from '../../assets/blog/Story/Roboto.png';

const Article = () => {
  return (
    <>
      <Header headerColor="#fff" />
      <div className={style['main']}>
        <p className={style['title']}>The rise of the humanoids, a new era for tech</p>
        <p className={style['sub-title']}>
          More and more startups are looking at building AI-enabled humanoids, but it’s too early to know the future of
          these machine-enabled beings
        </p>
        <div className={style['name-date']}>
          <div>
            <p className={style['sub-title']} style={{ color: '#53B2C5' }}>
              Sunny Sen
            </p>
            <p className={style['sub-title']}>January 01,2021</p>
          </div>
          <p className={style['middle-title']}>
            THE <u style={{ textUnderlinePosition: 'under' }}>BIG STORY</u>
          </p>
        </div>
        <img src={topImg} alt="topImg" className={style['large-img']} />
        <p className={style['source']}>Source: WikiPedia</p>
        <div className={style['overlay-wrap']}>
          <p className={style['paragraph']}>
            <img src={smallImg} alt="topImg" className={style['small-img']} />
            Humanoid robots are now used as research tools in several scientific areas. Researchers study the human body
            structure and behavior (biomechanics) to build humanoid robots. On the other side, the attempt to simulate
            the human body leads to a better understanding of it. Human cognition is a field of study which is focused
            on how humans learn from sensory information in order to acquire perceptual and motor skills. This knowledge
            is used to develop computational models of human behavior and it has been improving over time. <br />
            <br />
            It has been suggested that very advanced robotics will facilitate the enhancement of ordinary humans. See
            transhumanism. <br />
            <br />
            Although the initial aim of humanoid research was to build better orthosis and prosthesis for human beings,
            knowledge has been transferred between both disciplines. A few examples are powered leg prosthesis for
            neuromuscularly impaired, ankle-foot orthosis, biological realistic leg prosthesis and forearm prosthesis.
          </p>
          <p className={style['paragraph']}>
            Besides the research, humanoid robots are being developed to perform human tasks like personal assistance,
            through which they should be able to assist the sick and elderly, and dirty or dangerous jobs. Humanoids are
            also suitable for some procedurally-based vocations, such as reception-desk administrators and automotive
            manufacturing line workers. In essence, since they can use tools and operate equipment and vehicles designed
            for the human form, humanoids could theoretically perform any task a human being can, so long as they have
            the proper software. However, the complexity of doing so is immense.
          </p>
          <p className={style['paragraph']}>
            They are also becoming increasingly popular as entertainers. For example, Ursula, a female robot, sings,
            plays music, dances and speaks to her audiences at Universal Studios. Several Disney theme park shows
            utilize animatronic robots that look, move and speak much like human beings. Although these robots look
            realistic, they have no cognition or physical autonomy. Various humanoid robots and their possible
            applications in daily life are featured in an independent documentary film called Plug &amp; Pray, which was
            released in 2010.
          </p>
          <p className={style['paragraph']}>
            Humanoid robots, especially those with artificial intelligence algorithms, could be useful for future
            dangerous and/or distant space exploration missions, without having the need to turn back around again and
            return to Earth once the mission is completed.
          </p>
          {/* TODO: add premium content */}
          <div className={style['overlay']}>
            <div className={style['overlay-content']}>
              ist the sick and elderly, and dirty or dangerous jobs. Humanoids are also suitable for some
              procedurally-based vocations, such as reception-desk administrators and automotive manufacturing line
              workers. In essence, since they
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Article;
