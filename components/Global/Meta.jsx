import Head from 'next/head';
import React from 'react';

// interface IProps {
//   title?: string;
//   description?: string;
// }

const Meta = ({
  title = 'Freelancer Payout Finance',
  description = 'Freelancer Payout Finance',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='icon' href='' />
    </Head>
  );
};

export default Meta;
