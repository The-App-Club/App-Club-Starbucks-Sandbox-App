import {css, cx} from '@emotion/css';
import {Scrollbars} from 'rc-scrollbars';

const AdsSidebar = ({className}) => {
  return (
    <aside
      className={cx(
        css`
          max-width: 10rem;
          width: 100%;
        `,
        `border-2 rounded-lg`,
        className
      )}
    >
      <ul className={cx(css``, '')}>
        {[...Array(3).keys()].map((n, index) => {
          return (
            <li
              key={index}
              className={cx(
                css`
                  min-height: 3rem;
                  width: 100%;
                `,
                `p-2`
              )}
            >
              <h2 className="text-lg">{`item ${n}`}</h2>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export {AdsSidebar};
