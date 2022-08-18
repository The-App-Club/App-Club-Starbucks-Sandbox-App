import {css, cx} from '@emotion/css';
import {Link} from 'react-router-dom';
import {default as Layout} from '../../layouts/default';
import {Scrollbars} from 'rc-scrollbars';

import thaiFoodTakeout from '../../assets/thai-food-takeout.jpg';
import redAndGreenGooseberriesAgainstWhite from '../../assets/red-and-green-gooseberries-against-white.jpg';
import smallOrangePumpkinWithGreenLeavesBehind from '../../assets/small-orange-pumpkin-with-green-leaves-behind.jpg';
import {Brewing} from '../../components/Brewing';
import {PickUp} from '../../components/PickUp';

const NotFoundPage = ({pageName, notifier}) => {
  return (
    <Layout pageName={pageName} notifier={notifier}>
      <section
        className={cx(
          `max-w-7xl mx-auto w-full relative flex flex-col items-center pt-12`,
          css`
            min-height: 100vh;
          `
        )}
      >
        <h2 className="text-3xl flex items-center justify-center">Not Found</h2>
      </section>
    </Layout>
  );
};

export {NotFoundPage};
