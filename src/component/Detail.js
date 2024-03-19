import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import MoreComments from './MoreComments';

const Detail = () => {
    const navigation = useNavigation();
    const [comment, setComment] = useState('')

    const handleComment = (text) => {
        setComment(text)
    }
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#fff', borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/left-arrow.png')} style={{ height: 40, width: 40 }} />
                    </TouchableOpacity>
                    <View style={styles.rightIcons}>
                        <TouchableOpacity>
                            <Image source={require('../assets/share.png')} style={{ height: 30, width: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/bookmark.png')} style={{ height: 30, width: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/more.png')} style={{ height: 30, width: 30 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={styles.userInfo}>
                        <Image source={require('../assets/nerd.png')} style={{ height: 40, width: 40 }} />
                        <Text style={styles.name}>UserName</Text>
                        <Text style={{ color: 'gray', marginLeft: 'auto' }}>6h</Text>
                    </View>
                    <View>
                        <Text style={styles.query}>Which Software Company is romanticized overly by Indian Developers?</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <TouchableOpacity >
                                <Image source={require('../assets/like.png')} style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                            <Text style={{ color: 'black' }}>197</Text>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity >
                                <Image source={require('../assets/calendar.png')} style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                            <Text style={{ color: 'black' }}>18-05-2024</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.description}>As we all know FAANG/MAANG provides good starting salary. I want to know which other companies are romanticized.As we all know FAANG/MAANG provides good starting salary. I want to know which other companies are romanticized</Text>
                    </View>
                </View>
            </View>
            <View style={styles.commentSection}>
                <Text style={styles.commentTitle}>127 Comments</Text>
                <View style={styles.commentContainer}>
                    <Image source={require('../assets/nerd.png')} style={styles.commentAvatar} />
                    <View style={styles.commentContent}>
                        <TextInput
                            style={{ borderBottomWidth: 1, borderColor: 'black', padding: 0, color: 'black' }}
                            placeholder='Add Comment Here'
                            placeholderTextColor='black'
                            value={comment}
                            onChangeText={handleComment}
                        />
                        <View style={styles.commentButton}>
                            <TouchableOpacity>
                                <Text style={{
                                    height: 40, width: 70, borderRadius: 20, paddingTop: 10, paddingLeft: 10, color: 'black', borderColor: 'black', borderWidth: 0.5
                                }}>
                                    Submit
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* More comments can be added here */}
                <MoreComments username={'DhrubDas'} comment={'I also have the same doubt 3 years ago'} />
                <MoreComments username={'Soham_P'} comment={'I have faced the same Problem '} />
                <MoreComments username={'dummy'} comment={'thnx for solving the doubt '} />
            </View>


        </ScrollView>
    )
}

export default Detail

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    rightIcons: {
        flexDirection: 'row',
        gap: 30
    },
    icon: {
        marginLeft: 16,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingBottom: 20
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        color: 'black',
        paddingHorizontal: 10,
    },
    query: {
        color: 'black',
        paddingHorizontal: 30,
        fontSize: 22,
        fontWeight: '600'
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingLeft: 30,
        paddingVertical: 15
    },
    button: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3
    },
    description: {
        color: 'black',
        paddingHorizontal: 30,
        paddingBottom: 30,
        fontSize: 16,
        lineHeight: 20
    },
    commentSection: {
        padding: 16,
        borderTopColor: '#ccc',
    },
    commentTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
        color: 'black'
    },
    commentContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    commentContent: {
        flex: 1,
        justifyContent: 'center',
    },
    commentName: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 5,
        color: 'black'
    },
    commentText: {
        fontSize: 14,
        color: 'black'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderColor: 'black',
        paddingTop: 10,
    },
    commentAvatar: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    input: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 8,
    },
    commentButton: {
        justifyContent: 'center',
        marginTop: 10,
    }

});