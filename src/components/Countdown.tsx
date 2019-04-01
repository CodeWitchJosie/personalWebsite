import * as React from 'react';
import * as moment from 'moment';

interface Props {
  targetDate: moment.Moment;
}
interface State {
  display: React.ReactNode;
}

export default class Countdown extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const display = this.getDisplay(props.targetDate);
    this.state = {
      display,
    };
  }
  interval: any;
  componentWillMount() {
    this.update();

    this.interval = setInterval(() => {
      this.update();
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  getDisplay = (targetDate?: moment.Moment) => {
    const now = moment();
    targetDate = targetDate || now;
    const duration = moment.duration(targetDate.diff(now));

    const years = duration.years();
    const months = duration.months();
    const days = duration.days();

    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return (
      <div>
        <div>{`${years} years ${months} months ${days} days`}</div>
        <div>{`${hours} hours ${minutes} minutes ${seconds} seconds`}</div>
      </div>
    );
  };
  update = () => {
    const display = this.getDisplay(this.props.targetDate);
    this.setState({
      display,
    });
  };

  render() {
    return <div>{this.state.display}</div>;
  }
}
