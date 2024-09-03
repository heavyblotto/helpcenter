import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Watch Videos',
    Svg: require('@site/static/img/rum.svg').default,
    description: (
      <>
        The best in live streams, gaming, podcasts, and more. Sign up for free and unlock comments,playlists history, and more.
      </>
    ),
  },
  {
    title: 'Go Ad Free',
    Svg: require('@site/static/img/rum.svg').default,
    description: (
      <>
        Rumble Premium removes ads and provides additional features for creators and viewers. Learn more.
      </>
    ),
  },
  {
    title: 'Creator Help',
    Svg: require('@site/static/img/rum.svg').default,
    description: (
      <>
        Rumble is a platform for creators to share their content with the world. Learn the tools and grow your audience.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
