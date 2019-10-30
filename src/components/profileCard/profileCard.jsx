import React from 'react';
import PropTypes from 'prop-types';
import './profileCard.scss';
import { GoLocation, GoOrganization, GoMail } from 'react-icons/go';
import Image from '../image/image';


const ProfileCard = ({ data }) => (
  <section role="contentinfo" aria-label="Information about the user's Github profile">
    <article className="card">
      <figure>
        <Image />
      </figure>
      <div className="card__profile">
        {data.current && <h2>{data.current.name}</h2>}
        {data.current && (
          <p>
            {' '}
            {data.current.login}
          </p>
        )}
        {data.current && <p>{data.current.bio}</p>}
        {data.current && (
          <p>
            <GoLocation className="card__icons" />
            {data.current.location}
          </p>
        )}
        {data.current && (
          <p>
            <GoOrganization className="card__icons" />
              {data.current.company}
          </p>
        )}
        {data.current && (
          <p>
            <GoMail className="card__icons" />
            <a href="mailto:sed@sedkystanleysaid.com">
              {data.current.email}
            </a>
          </p>
        )}
      </div>
    </article>
  </section>
);

ProfileCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ProfileCard;
