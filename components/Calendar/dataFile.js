import moment from 'moment';
import Image from 'next/image';

// Days Attended to
export const dayList = [
  '2023-03-10',
  '2023-03-21',
  '2023-04-02',
  '2023-04-14',
  '2023-04-27',
  '2024-05-01',
  '2024-05-09'
];

// Add contents to corresponding day tiles
export const addContent = ({ date }) => {
  const contents = [];

  // if data corresponds to the dayList, add a icon/indicator
  if (dayList.find((day) => day === moment(date).format('YYYY-MM-DD'))) {
    contents.push(
      <>
        {/* <div className="dot"></div> */}
        <Image
          src='./good-icon.svg'
          className="attendedImg"
          width="26"
          height="26"
          alt="Attended"
        />
      </>
    );
  }
  return <div>{contents}</div>; // each day gets the corresponding info
};