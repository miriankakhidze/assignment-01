import React, { useState } from 'react'
import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const COLORS = ['#ed5199', '#ff8c69', '#67b5f7', "#21ba45", "#c9c9c9", "#3e3a3a"]


const Colors = () => {
    const [colors, setColors] = useState(['#ed5199', '#ff8c69', '#67b5f7', "#21ba45", "#c9c9c9", "#3e3a3a"])


    const RenderItem = ({ item, index }: any) => {
        return (
            <View style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginBottom: 40,
            }}>
                <View style={{
                    width: "90%",
                    height: 35,
                    borderRadius: 8,
                    backgroundColor: item
                }} />

                <Icon onPress={() => removeColorHandler(index)} name="delete" size={30} color="red" />

            </View>
        )
    }

    const RenderRowItem = ({ color }: { color: string }) => {
        return (
            <TouchableOpacity onPress={() => addColorHandler(color)} style={{
                backgroundColor: color,
                width: 50,
                height: 50,
                borderRadius: 25,
            }} />
        )
    }


    const addColorHandler = (color: string) => {
        setColors(prevColors => ([...prevColors, color]))
    }

    const removeColorHandler = (index: number) => {
        setColors((prevColors) => {
            if (index > -1) {
                prevColors.splice(index, 1);
            }
            return [...prevColors]
        })
    }

    return (
        <View style={{
        }}>
            <View style={{
                marginTop: 25,
                height: Dimensions.get('window').height - 160,
            }}>
                <FlatList data={colors} renderItem={RenderItem} />
            </View>
            <View>
                <Text>ADD ROW</Text>
                <View style={{
                    marginTop: 8,
                    flexDirection: "row",
                    justifyContent: "space-around",
                }}>
                    {COLORS.map((color, i) => <RenderRowItem key={i} color={color} />)}
                </View>
            </View>
        </View>
    )
}

export default Colors