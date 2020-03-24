import React, { Component } from 'react';
import { Text, Title } from 'native-base';

export default class BookDetail extends React.Component{

    constructor(props){
        super(props);
        // this.state = {
        //     refreshing:true,
        //     dataSource:[]
        // }
    }

    // onRefresh() {
    //     //Clear old data of the list
    //     // this.setState({ dataSource: [] });
    //     //Call the Service to get the latest data
    //     this.state.refreshing
    //     this.componentDidMount();
    //   }

    render(){

        // if(this.state.refreshing){
        //     return(
        //         <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        //             <Text> Loading...</Text>
        //             <ActivityIndicator/>
        //         </View>
        //     )
        // }

        return(
            <Text>
                Ini BooksDetail{book_id}. {title}, {author}{"\n"}
                {sinopsis}
            </Text>
            // <FlatList
            //         showsVerticalScrollIndicator={false}
            //         data={this.state.dataSource.data.books}
            //         keyExtractor={({id}, index) => id}
            //         renderItem=
            //         {
            //             ({item}) =>

            //                 <TouchableWithoutFeedback onPress={this.handlePress}>
            //                     <Card style={{ borderRadius:8, padding: 8, marginLeft:16, marginRight:16, marginBottom:8, marginTop:8 }}>
            //                         <Text >
            //                             {item.book_id}. {item.title}, {item.author}{"\n"}
            //                         </Text>
            //                         <Image style={{width: '100%', height:200}} source={{ uri: item.cover == '' ? 'https://makitweb.com/demo/broken_image/images/noimage.png' : `https://staging.activelearning-institute.com/uploads/${item.cover}` }}/>
            //                         <Text>
            //                             {item.sinopsis}
            //                         </Text>
            //                     </Card>
            //                 </TouchableWithoutFeedback>
            //         }
                    
            //         refreshControl={
            //             <RefreshControl
            //               //refresh control used for the Pull to Refresh
            //               refreshing={this.state.refreshing}
            //               onRefresh={this.onRefresh.bind(this)}
            //             />
            //           }
            //     />
        );
    }
}