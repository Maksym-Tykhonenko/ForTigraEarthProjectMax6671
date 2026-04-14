import cats from '../AfotraThearPorjecAsetsJatri/cats';
import CatShowInfo from '../TifagroEtharCompents/CatShowInfo';
import React, { useState } from 'react';
import ResiublBiutnJectifo from '../TifagroEtharCompents/ResiublBiutnJectifo';
import { RaidilGrandintPinripl } from '../TifagroEtharCompents/RaidilGrandintPinripl';
import {
    Share,
    View, Text, Dimensions,
    TouchableOpacity, Image,
    ImageBackground,
} from 'react-native';
import AnimatedExpandFadeView from '../TifagroEtharCompents/AnimatedExpandFadeView';
import findYourType from '../AfotraThearPorjecAsetsJatri/findYourType';


const { width, height } = Dimensions.get('window');

const getCatTypeImg = (name: string) => {
    return cats.find(c => c.name === name)?.foto;
};

const getCatByType = (type: string) => {
    switch (type) {
        case 'A': return cats.find(c => c.name === 'Lion');
        case 'B': return cats.find(c => c.name === 'Leopard');
        case 'C': return cats.find(c => c.name === 'Jaguar');
        case 'D': return cats.find(c => c.name.includes('Lynx')); // "Eurasian Lynx"
        case 'E': return cats.find(c => c.name === 'Caracal');
        default: return null;
    }
};
const catTypes = {
    A: { name: 'Lion', desc: 'A Leader', range: 'Sub-Saharan Africa', img: getCatTypeImg('Lion') },
    B: { name: 'Leopard', desc: 'A Survivor', range: 'Africa, Asia', img: getCatTypeImg('Leopard') },
    C: { name: 'Jaguar', desc: 'A Force', range: 'South America', img: getCatTypeImg('Jaguar') },
    D: { name: 'Lynx', desc: 'A Thinker', range: 'Europe, Asia, America', img: getCatTypeImg('Lynx') },
    E: { name: 'Caracal', desc: 'A Hunter', range: 'Africa, Middle East', img: getCatTypeImg('Caracal') },
};

export default function PickKindOfCatYouAre() {
    // Вибір 6 унікальних випадкових питань
    const [randomQuestions] = useState(() => {
        const shuffled = [...findYourType].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 6);
    });

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]); // answers: масив індексів вибраних опцій
    const [showResult, setShowResult] = useState(false);

    // Чекбокс картинки
    const checkboxEmpty = require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/chenful.png');
    const checkboxFilled = require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/chewihttigrch.png');

    // Вибір відповіді
    const handleSelect = (optionIdx) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = optionIdx;
        setAnswers(newAnswers);
    };

    // Перехід до наступного питання або показ результату
    const handleNext = () => {
        if (currentQuestion < randomQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    // Підрахунок більшості
    const getResultType = () => {
        // answers: масив індексів вибраних опцій (0..4)
        const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
        answers.forEach(idx => {
            const type = ['A', 'B', 'C', 'D', 'E'][idx];
            if (type) counts[type]++;
        });
        let maxType = 'A', maxCount = counts['A'];
        Object.entries(counts).forEach(([type, count]) => {
            if (count > maxCount) {
                maxType = type;
                maxCount = count;
            }
        });
        return maxType;
    };

    // Вивід деталі
    const renderDetail = () => {
        const resultType = getResultType();
        if (!showResult || !resultType) return null;
        const cat = getCatByType(resultType);
        if (!cat) return null;
        return (
            <AnimatedExpandFadeView
                visible={showResult}
                maxHeight={height * 0.38}
                style={{

                    margin: width * 0.02,

                }}
            >
                <CatShowInfo cat={cat} />
            </AnimatedExpandFadeView>
        );
    };

    const rendrShowResult = () => (
        <View style={{
            alignItems: 'center',
            backgroundColor: 'transparent',
            justifyContent: 'center',
        }}>
            {renderDetail()}
        </View>
    )

    // Поточне питання та опції
    const questionObj = randomQuestions[currentQuestion];

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent', }}>
            <ImageBackground
                source={require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/rulfull.png')}
                style={{
                    height: height * 0.19, borderRadius: width * 0.04, alignItems: 'center', justifyContent: 'center',
                    width: width * 0.92,
                    overflow: 'hidden',
                }}
                resizeMode='stretch'
            >
                <View style={{
                    marginBottom: height * 0.02, alignItems: 'center', minHeight: height * 0.13,
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255,255,255,0.0)',
                    marginTop: height * 0.04,
                    width: width * 0.8,
                }}>
                    <Text style={{
                        fontWeight: '500',
                        fontSize: width * 0.043,
                        textAlign: 'center',
                        color: '#642319',
                    }}
                    >  {!showResult ? questionObj.question : 'According to the survey, this is what kind of cat you are:'}
                    </Text>
                </View>
            </ImageBackground>

            {showResult ? rendrShowResult() : (
                <>
                    {/* Опції */}
                    <View style={{ width: width * 0.92 }}>
                        {questionObj.options.map((opt, idx) => (
                            <View key={idx} style={{   flexDirection: 'row', marginVertical: height * 0.012, alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                                <View key={idx} style={{
                                    justifyContent: 'center',
                                    borderRadius: width * 0.1,
                                    width: width * 0.7,
                                    alignItems: 'center',
                                    borderWidth: width * 0.008,
                                    borderColor: '#F5BE26',
                                    overflow: 'hidden',
                                    height: height * 0.07,
                                }}>
                                    <RaidilGrandintPinripl />
                                    <Text style={{
                                        fontWeight: '500',
                                        color: 'white',
                                        fontSize: width * 0.045,
                                    }}>
                                        {opt}
                                    </Text>
                                </View>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => handleSelect(idx)}>
                                    <Image source={answers[currentQuestion] === idx ? checkboxFilled : checkboxEmpty} style={{ width: width * 0.16, height: width * 0.16, marginLeft: width * 0.03, }} />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </>
            )}


            <ResiublBiutnJectifo
                disabled={answers[currentQuestion] == null}
                onPress={() => {
                    if (showResult) {
                        Share.share({
                            message: `I am a ${catTypes[getResultType()].name}!\n${catTypes[getResultType()].desc}\nRange: ${catTypes[getResultType()].range}`,
                        })
                    } else handleNext();
                }}
                fontSize={width * 0.055}
                pofirathTexPeredavaymyi={showResult ? 'Share' : currentQuestion === randomQuestions.length - 1 ? 'Show Result' : 'Next'}
                isShare={showResult}
                dodatkoviStyliThaer={{
                    position: 'absolute', zIndex: 3, bottom: height * 0.05, alignSelf: 'center',
                }}
            />

            {showResult && (
                <Image source={require('../AfotraThearPorjecAsetsJatri/TorfathJeporZobrimags/thinking.png')} style={{
                    bottom: -height * 0.19, width: width * 0.7,                    alignSelf: 'center', height: height * 0.59, position: 'absolute',
                    }}
                    resizeMode='contain'
                />
            )}
        </View>
    );
}
