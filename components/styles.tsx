import styled from 'styled-components/native'

export const Center = styled.View`
  background-color: aqua;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LoginField =styled.View`
height: 50%;
width: 80%;
position: relative;
display: flex;
align-items: center;
justify-content: center;
background-color: #ffffff;
border-radius: 10px;
box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.886);
`;   

export const LoginTitle =styled.Text`
font-size:20px;
font-weight: 800;
position:absolute;
top: 3%;
left: 40%;
`;   

export const InputField =styled.TextInput`
height: 10%;
width: 80%;
margin-top:10%;
border:1px solid;
border-radius:10px;
padding:3%;
box-shadow: 0px 6px 8px rgba(2, 4, 4, 0.886);
`;

export const SecondInput = styled(InputField)`
border: 3px dashed blue;
`;

export const NavButton =styled.TouchableOpacity`
height: 10%;
width: 40%;
background-color:#bdc7ffda;
position:absolute;
bottom: 10%;
left: 30%;
border-radius: 10px;
box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.886);
`;

