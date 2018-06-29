

export const fetchEvents = () => {
  fetch('/api/events')
    .then(res => res.json())
    .then(data => {
      this.setState({ events: data });
      this.getTodayEvents(data, this.state.selected);
    })
    .catch(err => console.log(err.message));
};
