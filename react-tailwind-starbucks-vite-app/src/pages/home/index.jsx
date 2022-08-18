import {css, cx} from '@emotion/css';
import {Link} from 'react-router-dom';
import {default as Layout} from '../../layouts/default';
import {Scrollbars} from 'rc-scrollbars';

import thaiFoodTakeout from '../../assets/thai-food-takeout.jpg';
import redAndGreenGooseberriesAgainstWhite from '../../assets/red-and-green-gooseberries-against-white.jpg';
import smallOrangePumpkinWithGreenLeavesBehind from '../../assets/small-orange-pumpkin-with-green-leaves-behind.jpg';
import {Brewing} from '../../components/Brewing';
import {PickUp} from '../../components/PickUp';
import {HomeMainContent} from '../../components/HomeMainContent';
import {AdsSidebar} from '../../components/AdsSidebar';

const HomePage = ({pageName, notifier}) => {
  return (
    <Layout pageName={pageName} notifier={notifier}>
      <section
        className={cx(
          `max-w-7xl mx-auto w-full relative pt-12 px-2 py-2`,
          css`
            max-width: 1600px;
            min-height: 100vh;
            @media (max-width: 1250px) {
              max-width: 700px;
            }
          `
        )}
      >
        <h2 className="text-3xl flex items-center justify-center">HomePage</h2>
        <div
          className={cx(
            css`
              justify-content: space-between;
            `,
            `flex w-full items-start gap-2`
          )}
        >
          <AdsSidebar
            className={css`
              position: sticky;
              top: 3rem;
              display: block;
              @media (max-width: 1250px) {
                display: none;
              }
            `}
          />
          <HomeMainContent />
        </div>
      </section>
    </Layout>
  );
};

export {HomePage};
