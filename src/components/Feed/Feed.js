import React, {Component} from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './Feed.css';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: []
        };
      }
    
    async getPosts() {
        const db = getFirestore();
    
        try {
          const querySnapshot = await getDocs(collection(db, 'post'));
          const posts = [];
    
          querySnapshot.forEach((doc) => {
            const postData = doc.data();
            const post = {
              id: doc.id,
              text: postData.text,
              like: postData.like
            };
            posts.push(post);
          });
    
          // Atualize o estado com os posts obtidos
          this.setState({ posts });
        } catch (error) {
          console.error('Erro ao obter posts:', error);
        }
      }

    componentDidMount() {
        this.getPosts();
    }
    
    render() {
        return (
          <div id='feed'>
            {this.state.posts.map(post => (
              <div class='posts' key={post.id}>
                    <p>{post.text}</p>
              </div>
            ))}
          </div>
        );
    }
}

export default Feed;    