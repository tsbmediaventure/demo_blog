import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import style from './article.module.scss';
import { Link } from 'react-router-dom';
import smallImg from '../../assets/blog/Story/Roboto.png';
import { useLocation } from 'react-router-dom';
import { data as DemoData } from './DemoData';

const Article = () => {
  const location = useLocation();
  let data = location.state as {
    id: number;
    title: string;
    subTitle: string;
    name: string;
    date: string;
    img: string;
  };
  if (!data) data = DemoData[0];
  const [paid, setPaid] = useState(false);
  const API_URL = 'https://sandbox-api.conscent.in/api/v1';

  const clientId = '5fffcf4b2a2d942cb093ea18';
  const storyId = data.id.toString();
  useEffect(() => {
    // @ts-ignore
    const csc = window._csc as any;
    csc('init', {
      debug: true,
      storyId: data.id, // your story id here
      subscriptionUrl: 'https://github.com/pricing', // example url, add your subscription url here
      clientId: clientId, // your clientID here
      successCallback: async (validationObject: any) => {
        /**
         * example validationObject structure:
        {
            message: 'Story Read Confirmed',
            payload: {
              clientId: '5fffcf4b2a2d942cb093ea18',
              storyId: '3',
              transactionAmount: 3,
              createdAt: '2021-01-18T05:34:12.658Z',
            },
            readId: '7c873f32-e16b-4a94-a51c-7e873ff0fb15',
        }
         */
        // If possible, the following validation should be done by your backend server to avoid all tampering by the user
        // For this, you must pass only the readId from your frontend to your backend.
        // This example will continue validation in the frontend --
        // The following API call is valid only ONCE. Further calls will return 401 (unauthorized) because every readId is a one-time access provided to the user.
        const backendConfirmationResponse = await axios.post(`${API_URL}/story/read/${validationObject.readId}`);
        const confirmationPayload = backendConfirmationResponse.data.payload;

        /**
         *
         * Confirmation Payload structure:
         {
            "message": "Story Read Confirmed",
            "payload": {
              "clientId": "5fffcf4b2a2d942cb093ea18",
              "storyId": "3",
              "transactionAmount": 0,
              "createdAt": "2021-01-18T05:48:00.340Z"
            },
            "readId": "2fe99e81-52a8-4fd2-8b89-0e3b561b4da1"
          }
         */
        // Validation starting
        if (
          backendConfirmationResponse.data.readId === validationObject.readId &&
          clientId === confirmationPayload.clientId &&
          storyId === confirmationPayload.storyId
        ) {
          // Validation successful
          setPaid(true); // DO all the actions you need to do to show the user the story here
        } else {
          // Validation failed
          console.error('Invalid authentication, story will not be shown');
          // To handle this case you might want to redirect the user to your subscription page instead with a payment failed error.
        }
      },
      wrappingElementId: 'csc-paywall',
      fullScreenMode: 'false',
    });
  }, []);

  return (
    <>
      <Header headerColor="#fff" />
      <div className={style['main']}>
        <p className={style['title']}>{data.title}</p>
        <p className={style['sub-title']}>{data.subTitle}</p>
        <div className={style['name-date']}>
          <div>
            <p className={style['sub-title']} style={{ color: '#53B2C5' }}>
              {data.name}
            </p>
            <p className={style['sub-title']}>{data.date}</p>
          </div>
          <p className={style['middle-title']}>
            THE <u style={{ textUnderlinePosition: 'under' }}>BIG STORY</u>
          </p>
        </div>
        <img src={data.img} alt="topImg" className={style['large-img']} />
        <p className={style['source']}>Source: WikiPedia</p>
        <div className={style['overlay-wrap']}>
          <p className={style['paragraph']}>
            <img src={smallImg} alt="topImg" className={style['small-img']} />
            Humanoid robots are now used as research tools in several scientific areas. Researchers study the human body
            structure and behavior (biomechanics) to build humanoid robots. On the other side, the attempt to simulate
            the human body leads to a better understanding of it. Human cognition is a field of study which is focused
            on how humans learn from sensory information in order to acquire perceptual and motor skills. T
            <span className={paid ? style['paragraph'] : style['blur-text-seven']}>
              his knowledge is used to develop computational models of human behavior and it has been improving over
              time. <br />
              <br />
              It has been suggested that very advanced robotics will facilitate the enhancement of ordinary humans. See
              transhumanism. <br />
              <br />
              Although the initial aim of humanoid research was to build better orthosis and prosthesis for human
              beings, knowledge has been transferred between both disciplines. A few examples are powered leg prosthesis
              for neuromuscularly impaired, ankle-foot orthosis, biological realistic leg prosthesis and forearm
              prosthesis.
            </span>
          </p>
          <p className={paid ? style['paragraph'] : style['blur-text-eight']}>
            Besides the research, humanoid robots are being developed to perform human tasks like personal assistance,
            through which they should be able to assist the sick and elderly, and dirty or dangerous jobs. Humanoids are
            also suitable for some procedurally-based vocations, such as reception-desk administrators and automotive
            manufacturing line workers. In essence, since they can use tools and operate equipment and vehicles designed
            for the human form, humanoids could theoretically perform any task a human being can, so long as they have
            the proper software. However, the complexity of doing so is immense.
          </p>
          <p className={paid ? style['paragraph'] : style['blur-text-nine']}>
            They are also becoming increasingly popular as entertainers. For example, Ursula, a female robot, sings,
            plays music, dances and speaks to her audiences at Universal Studios. Several Disney theme park shows
            utilize animatronic robots that look, move and speak much like human beings. Although these robots look
            realistic, they have no cognition or physical autonomy. Various humanoid robots and their possible
            applications in daily life are featured in an independent documentary film called Plug &amp; Pray, which was
            released in 2010.
          </p>
          <p className={paid ? style['paragraph'] : style['blur-text-ten']}>
            Humanoid robots, especially those with artificial intelligence algorithms, could be useful for future
            dangerous and/or distant space exploration missions, without having the need to turn back around again and
            return to Earth once the mission is completed.
          </p>
          <Link to="/">
            <p onClick={() => window.scrollTo(0, 0)}>&lt;&lt; Back</p>
          </Link>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              ...(paid && { width: 0 }),
            }}
          >
            <div
              className={style['overlay']}
              id="csc-paywall"
              style={{
                ...(paid && { width: 0 }),
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Article;
