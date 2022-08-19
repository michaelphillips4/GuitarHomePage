
import React from 'react';


class Music extends React.Component {
  constructor(props) {
     super(props);
     console.log("constuctor");
     this.state = {
      isLoaded: false,
      items: []
   }
  }

  setItems(remoteItems) {
   console.log(remoteItems); 
   let items = [];
   for (let i = 0; i < remoteItems.length; i++) {
    items.push(
      {key : i, 
        name : remoteItems[i].replace(/.mp3/,'').replace('Music/','').replace(/_/g,' '),
        url : 'https://python-bucket-1.s3.eu-west-2.amazonaws.com/' + remoteItems[i]
      })
   
  }
  console.log(items); 
    this.setState({
       isLoaded: true,
       items: items
    });
 }

 fetchRemoteItems() {
  fetch("https://ylgkc6ajqf.execute-api.eu-west-2.amazonaws.com/prod/music")
     .then(res => res.json())
     .then(
        (result) => {
          console.log(typeof(result.body)); 
           this.setItems(JSON.parse(result.body));
        },
        (error) => {
           this.setState({
              isLoaded: false,
              error
           });
        }
     )
}
componentDidMount() { 
  this.fetchRemoteItems(); 
}
render() {
  let list = [];
  if (this.state.isLoaded) {
     list = this.state.items.map((item) =>
     <li key={item.key}>
     <h4>{item.name}</h4>
     <audio controls>
       <source src={item.url} type="audio/mpeg" />
       Your browser does not support the audio element.
     </audio>
   </li>
     );
  }
  return (
    <>
    <h3>Music</h3>
    <ul>{list}</ul>
    </>
  );
}

}


export default Music;
