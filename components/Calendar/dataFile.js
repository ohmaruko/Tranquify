import styled from 'styled-components';
import moment from 'moment';

// Days Attended to
export const dayList = [
  '2024-05-03',
  '2024-05-04',
  '2024-05-07',
  '2024-05-09',
  '2024-05-12',
  '2024-05-15',
  '2024-05-17',
];

// Styled dot component with dynamic background color
const Dot = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

// Add contents to corresponding day tiles
export const addContent = ({ date }) => {
  const contents = [];

  // Define colors for each day
  const dayColors = {
    '2024-05-03': '#FF9E88',
    '2024-05-04': '#567751',
    '2024-05-07': '#5C5C6D',
    '2024-05-09': '#FF9E88', 
    '2024-05-12': '#79ADDC',
    '2024-05-15': '#F78B98',
    '2024-05-17': '#79ADDC',
  };

  const dayKey = moment(date).format('YYYY-MM-DD');
  // if data corresponds to the dayList, add an icon/indicator with the corresponding color
  if (dayList.includes(dayKey)) {
    contents.push(<Dot color={dayColors[dayKey]} />);
  }

  return <div>{contents}</div>; // each day gets the corresponding info
};
