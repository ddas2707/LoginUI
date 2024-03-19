import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const MoreComments = ({ username, comment }) => {
    return (
        <>
            <View style={styles.moreComments}>
                <Image source={require('../assets/nerd.png')} style={styles.commentAvatar} />
                <View>
                    <Text style={styles.commentName}> @{username}</Text>
                    <Text style={styles.moreCommentDesc}>{comment}</Text>
                </View>
            </View>
        </>
    )
}

export default MoreComments

const styles = StyleSheet.create({
    moreComments: {
        marginTop: 20,
        flexDirection: 'row',
    },
    commentName: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
    },
    moreCommentDesc: {
        color: 'black'
    },
    commentAvatar: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 10,
    },
})