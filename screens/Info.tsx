import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Context as AuthContext } from "../components/authentication/AuthContext";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Box, Text, useTheme } from "../components";
import FaceIcon from "../assets/images/FaceIcon";
import {
  heightToPercentage,
  widthToPercentage,
} from "../constants/Layout";

import { useActionSheet } from "@expo/react-native-action-sheet";
import { Modal } from "react-native";
import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import { AuthStackParamList } from "../types";
import { L } from "../utils/Lan";

const Info = ({
  navigation,
}: StackScreenProps<AuthStackParamList, "Info">) => {
  const { setLan, state } = React.useContext(AuthContext);
  const theme = useTheme();
  const [modalVisible, setModalVisible] = React.useState(
    false
  );
  const [modalText, setModalText] = React.useState("");
  const handleModal = (text: string) => {
    setModalVisible(true);
    setModalText(text);
  };
  const setLang = (lang: string): void => {
    if (lang !== state.lang) {
      setLan(lang);
      // console.log(state.lang, "STATE 2");
      // init();
      // console.log(state.lang, "STATE 3");
    }
    // navigation.navigate("Info");
  };
  const { showActionSheetWithOptions } = useActionSheet();
  const onPress = (): void => {
    showActionSheetWithOptions(
      {
        options: [
          L("English"),
          L("Turkish"),
          L("French"),
          L("German"),
          L("Italian"),
          L("Norwegian"),
          L("Portuguese"),
          L("Russian"),
          L("Spanish"),
          L("Swedish"),
          L("CommonCancel"),
        ],
        cancelButtonIndex: 10,
        message: L("SelectLanguage"),
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          console.log(state.lang, "STATE 1");
          setLan("en-US");
        }

        if (buttonIndex === 1) {
          setLan("tr-TR");
        }
        if (buttonIndex === 2) {
          setLang("fr-FR");
        }

        if (buttonIndex === 3) {
          setLang("de-DE");
        }
        if (buttonIndex === 4) {
          setLang("it-IT");
        }

        if (buttonIndex === 5) {
          setLang("no-NO");
        }
        if (buttonIndex === 6) {
          setLang("pt-PT");
        }
        if (buttonIndex === 7) {
          setLang("ru-RU");
        }
        if (buttonIndex === 8) {
          setLang("es-ES");
        }
        if (buttonIndex === 9) {
          setLang("sv-SV");
        }
      }
    );
  };
  React.useEffect(() => {
    if (state.lang !== null) {
      setLan(state.lang);
    }
  }, [state.lang]);
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        justifyContent="center"
        alignItems="center"
        style={{
          paddingTop: heightPercentageToDP(2.8),
          paddingBottom: heightPercentageToDP(2.8),
        }}
      >
        <FaceIcon />
      </Box>
      <Box
        alignItems="center"
        justifyContent="center"
        style={{
          paddingBottom: heightToPercentage(3.44),
        }}
      >
        <Text variant="title">FACE YOURSELF</Text>
      </Box>
      <Box
        justifyContent="space-evenly"
        alignItems="center"
        style={{
          paddingBottom: heightToPercentage(3.44),
          paddingHorizontal: widthPercentageToDP(5),
        }}
      >
        <Text variant="explanatoryl" textAlign="center">
          {L("InfoContactMessage")}
        </Text>
        <Text
          variant="explanatoryl"
          color="purple"
          textAlign="center"
        >
          info@face2yourself.com
        </Text>
      </Box>
      <TouchableOpacity
        onPress={() => handleModal("privacy")}
      >
        <Box
          borderWidth={1}
          flexDirection="row"
          justifyContent="space-between"
          borderBottomColor="whitePurple"
          borderTopColor="whitePurple"
          borderRightColor="transparent"
          borderLeftColor="transparent"
          style={{
            paddingHorizontal: widthPercentageToDP(8),
            paddingVertical: widthPercentageToDP(4),
          }}
        >
          <Text
            variant="section"
            textAlign="left"
            textTransform="capitalize"
          >
            {L("InfoPrivacyPolicy")}
          </Text>
          <AntDesign
            name="right"
            size={widthPercentageToDP(5)}
            color={theme.colors.purpleMid}
          />
        </Box>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleModal("terms")}
      >
        <Box
          borderWidth={1}
          flexDirection="row"
          justifyContent="space-between"
          borderBottomColor="whitePurple"
          borderTopColor="whitePurple"
          borderRightColor="transparent"
          borderLeftColor="transparent"
          style={{
            paddingHorizontal: widthPercentageToDP(8),
            paddingVertical: widthPercentageToDP(4),
          }}
        >
          <Text
            variant="section"
            textAlign="left"
            textTransform="none"
          >
            {L("InfoTerms")}
          </Text>
          <AntDesign
            name="right"
            size={widthPercentageToDP(5)}
            color={theme.colors.purpleMid}
          />
        </Box>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleModal("analysis")}
      >
        <Box
          borderWidth={1}
          flexDirection="row"
          justifyContent="space-between"
          borderBottomColor="whitePurple"
          borderTopColor="whitePurple"
          borderRightColor="transparent"
          borderLeftColor="transparent"
          style={{
            paddingHorizontal: widthPercentageToDP(8),
            paddingVertical: widthPercentageToDP(4),
          }}
        >
          <Text
            variant="section"
            textAlign="left"
            textTransform="capitalize"
          >
            {L("InfoAnalysis")}
          </Text>
          <AntDesign
            name="right"
            size={widthPercentageToDP(5)}
            color={theme.colors.purpleMid}
          />
        </Box>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPress()}>
        <Box
          borderWidth={1}
          flexDirection="row"
          justifyContent="space-between"
          borderBottomColor="whitePurple"
          borderTopColor="whitePurple"
          borderRightColor="transparent"
          borderLeftColor="transparent"
          style={{
            paddingHorizontal: widthPercentageToDP(8),
            paddingVertical: widthPercentageToDP(4),
          }}
        >
          <Text
            variant="section"
            textAlign="left"
            textTransform="capitalize"
          >
            {L("SettingsLanguage")}
          </Text>
          <AntDesign
            name="right"
            size={widthPercentageToDP(5)}
            color={theme.colors.purpleMid}
          />
        </Box>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <Box
          flex={1}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width={widthToPercentage(100)}
            height={heightToPercentage(100)}
            backgroundColor="white"
            paddingHorizontal="b"
          >
            <AntDesign
              onPress={() => setModalVisible(false)}
              name="closecircleo"
              size={widthPercentageToDP(10)}
              color="black"
              style={{
                alignSelf: "flex-end",
                paddingTop: widthPercentageToDP(2),
              }}
            />
            {modalText === "analysis" && (
              <>
                <Text
                  variant="errorMessage"
                  textAlign="center"
                  paddingHorizontal="b"
                  paddingTop="s"
                  paddingBottom="m"
                >
                  Analysis Technique
                </Text>
                <Text
                  variant="explanatoryl"
                  paddingLeft="b"
                  paddingBottom="s"
                >
                  In this App, mainly, the Artificial Neural
                  Network (ANN) technique is used. The App
                  aims to process the features determined in
                  the face lines with ANN. After, to make a
                  social analysis of the results for
                  revealing personality maps.
                </Text>
                <Text
                  variant="explanatoryl"
                  paddingLeft="b"
                  paddingBottom="s"
                >
                  We examined dozens of other points on the
                  facial lines and created thousands of
                  varying face combinations. We have trained
                  ten thousands of face databases from
                  different nations using Machine Learning
                  Technology to develop software.
                </Text>
                <Text
                  variant="explanatoryl"
                  paddingLeft="b"
                  paddingBottom="s"
                >
                  The analysis pattern is made by
                  face-personality matching with the
                  predictions of social scientists.
                </Text>
                <Text
                  variant="explanatoryl"
                  paddingLeft="b"
                  paddingBottom="s"
                >
                  Of course, this is not an exact match.
                  This analysis gives an idea, but the
                  primary purpose is just for fun.
                </Text>
              </>
            )}
            {modalText === "privacy" && (
              <ScrollView>
                <Text variant="title">Privacy Policy</Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  Effective as of February 01, 2021.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  Last updated February 01, 2021.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  Please read all documents carefully.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  Face Yourself is an online AI-based mobile
                  application that uniquely allows you to
                  create your personality map from your
                  facial lines.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  Tanos Technology LLC. built the Face
                  Yourself mobile application (the App) as a
                  Free app. This service is provided by
                  Tanos Technology LLC. (“We”, “our” or
                  “us”) at no cost and is intended for use
                  as is.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  We respect its users’ privacy (“you” or
                  “your”) and has developed this Privacy
                  Policy to demonstrate its commitment to
                  protecting your privacy. This Privacy
                  Policy represents the privacy practices of
                  Face Yourself in connection with the App.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  By using this App, you accept the
                  following privacy policy, responsibility
                  policies, and terms of use.
                </Text>

                <Text></Text>
                <Text variant="title">
                  Welcome to Face Yourself’s Privacy Policy!
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  If you determine not to read this entire
                  Privacy Policy, we want you to walk away
                  with a few critical points about Face
                  Yourself’s privacy practices:
                </Text>

                <Text></Text>

                <Text variant="explanatoryl">
                  • The App is a photo analyzer that allows
                  users to see the modeling of Pattern
                  Characteristics based on neural network
                  technology that technically analyzes your
                  face instantly.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  • The App sends the uploaded photo to the
                  server with your permission. Technical
                  analysis is done on the server, and the
                  results are delivered to the user.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  • We use third-party cloud providers –
                  specifically, Google Cloud Platform and
                  Amazon Web Services – to process photos.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  • The App only uploads to the cloud the
                  photos that you specifically select for
                  analyzing.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  • Photos remain in the cloud for a limited
                  with your permission after you have
                  analyzed the photo so that you can return
                  to the gallery and remember Pattern
                  Characteristics results if you so choose.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  • We do not use the photos when you use
                  the App for any reason other than to
                  provide you the image analysis, the App's
                  functionality, and don't collect, use, and
                  share your photos.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  • We configure the Face Yourself's
                  Services to delete photos within 24-48
                  hours after the photo was last analyzed
                  using the App. The server allows you to
                  revisit the reanalysis during that time.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  • In-App, only one human face needs to be
                  defined for analysis. It is not possible
                  to upload photos where the subject is not
                  the face of a real person. It is forbidden
                  to use a modified human face in the App.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  • This App is for entertainment purposes
                  only. It does not take the place of a
                  personal live consultation with a
                  psychiatrist or expert else.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  • The App analysis results are purely for
                  fun aims, social, environmental, health,
                  etc., responsibility is not accepted by
                  our company by usage and sharing ways.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  • All analysis items, templates, style
                  (Heptagon Spider Chart of Pattern
                  Characteristics), pictures, data, which
                  are the App's results, belong to the
                  company, cannot be copied or used.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  • We may update the artificial neural
                  network to get a better analysis result.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  • By App, our company is not responsible
                  for the negative factors that may occur
                  due to social media, etc., shares on all
                  platforms.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  • The App supports multi-languages, and
                  its native language is English. There may
                  be errors due to translation in other
                  languages; by the way, our company is not
                  responsible for spelling errors, etc.,
                  other than English. We would be pleased to
                  report your bug reports via feedback or
                  email.{" "}
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  • The Pattern Characteristic maps (Soul,
                  Mind, Heart, Self) and its features that
                  make up the heptagon, and their
                  explanations created as a result of the
                  analysis, are not within precise limits;
                  they are a social comment, one can
                  interpret it differently.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  If you have any questions about our
                  privacy policy, please email
                  info@face2yourself.com.
                </Text>

                <Text></Text>
                <Text variant="title">
                  Personal Information We Collect
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  When you use the App, we may gather
                  information about you, including:
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  • Photos you provide when you use the App,
                  via your camera or camera roll (if you
                  have permitted us to access your camera or
                  camera roll), the in-App internet search
                  functionality, or your social media
                  account (if you choose to connect your
                  social media account). We get only the
                  specific photos you chose to analyze using
                  the App; we do not collect your photo
                  albums even if you confirm your access to
                  them. We take steps to delete any metadata
                  associated with the photo you provide when
                  you use the App.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  • Your photos are stored on Face
                  Yourself’s server until you finish the
                  analysis, but not longer than within 24-48
                  hours after seeing the patterns. For the
                  rest of the time, your photos used in the
                  Face Yourself application is stored
                  locally on your device and may be removed
                  any time by deleting these photos from
                  your mobile device’s file system directly
                  or deleting the Face Yourself application.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  • Social media information, if you choose
                  to login to the App via a third-party
                  platform or social media network (for
                  example, Facebook), or otherwise connect
                  your account on the third-party platform
                  or network to the App. We may collect
                  information from that platform or network,
                  such as your social media alias, first and
                  last name, the number of “friends” on the
                  social media platform and, if depending on
                  your Facebook or other network settings, a
                  list of your friends or connections
                  (though we do not use or store this
                  information). The requirements govern our
                  collection and processing of the
                  information we obtain from social media
                  platforms these social media platforms
                  impose on us in their relevant terms of
                  use.
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  • Device data, such as your computer and
                  mobile device operating system type and
                  version number, manufacturer and model,
                  device ID, Phone Brand, push tokens,
                  Google Advertising ID, Apple ID for
                  Advertising, browser type, screen
                  resolution, IP address (and the associated
                  country in which you are located), and
                  other information about the device you are
                  using to see the App.
                </Text>
                <Text></Text>
                <Text variant="title">
                  How We Use and Share Your Personal
                  Information
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  For better knowledge, while using our
                  Service, I may require you to provide us
                  with a specific personally identifiable
                  report, including but not limited to the
                  software developer. The information that I
                  demand will be retained on your device and
                  is not collected by me in any way.
                </Text>

                <Text> </Text>
                <Text variant="explanatoryl">
                  The App does use third-party services that
                  may collect information used to identify
                  you..
                </Text>
                <Text variant="explanatoryl">
                  Link to the privacy policy of third party
                  service providers used by the App:{" "}
                </Text>

                <Text variant="explanatoryl">
                  • Google Play Services
                </Text>
                <Text></Text>
                <Text variant="explanatoryl"> • Admob</Text>
                <Text></Text>

                <Text variant="title">
                  To run and improve the App:
                </Text>
                <Text></Text>

                <Text variant="explanatoryl">
                  • Let you use the App’s features;
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  • Establish and continue your account if
                  you choose to login to the App using your
                  social media account;{" "}
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  • Communicate with you regarding the App,
                  including by sending you announcements,
                  security alerts, and updates, which we
                  might send through a push notification,
                  and responding to your questions,
                  requests, and feedback;{" "}
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  • Ensure technical support and maintenance
                  for the App; and{" "}
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  • Perform statistical analysis about the
                  use of the App (including using Google
                  Analytics).
                </Text>
                <Text></Text>

                <Text variant="title">
                  To send you marketing and promotional
                  communications:
                </Text>
                <Text></Text>

                <Text variant="explanatoryl">
                  • We may send you marketing communications
                  as let by law.
                </Text>
                <Text></Text>

                <Text variant="title">
                  To display advertisements to you:
                </Text>
                <Text></Text>

                <Text variant="explanatoryl">
                  • If you analyze photos in the App, we
                  work with advertising partners to monitor
                  advertisements within the App. These
                  advertisements are sent by our advertising
                  partners and maybe goal based on your use
                  of the App or your activity elsewhere
                  online.
                </Text>
                <Text></Text>

                <Text variant="title">
                  To create anonymous, unidentified, or
                  aggregated data:{" "}
                </Text>
                <Text></Text>

                <Text variant="explanatoryl">
                  • We may create anonymous, unidentified,
                  or aggregated data from your personal
                  information and other individuals whose
                  personal information we gather. We make
                  personal information into anonymous,
                  unidentified, or aggregated data by
                  removing information that makes the data
                  personally identifiable to you. We may use
                  this anonymous, unidentified, or
                  aggregated data and share it with third
                  parties for our lawful business purposes.
                </Text>
                <Text></Text>
                <Text variant="title">
                  How We Share Your Personal Information:
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  We may share your non-photos and
                  non-identification information in the
                  following circumstances:
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  • Affiliates.
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  • Service providers.
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  • Advertising partners.
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  • Third-party platforms and social media
                  networks.
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  • Professional advisors.
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  • For compliance, fraud prevention, and
                  safety.
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  • Business transfers.
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  If you are from the EU, you need to know
                  that the transfer of your data to the
                  recipients in these countries is secured
                  either by the participation of the
                  contractors from the United States in the
                  Privacy Shield Program or based on
                  standard contractual clauses adopted by
                  the European Commission and compliant with
                  the EU data protection laws. By using our
                  Services, you agree to such transfer and
                  processing within the purposes set herein.
                </Text>
                <Text></Text>
                <Text variant="title">Log Data</Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  We want to notice you that whenever you
                  use my Service, in case of an error in the
                  App, We gather data and information
                  (through third-party products) on your
                  phone called Log Data. This Log Data may
                  include information such as your device
                  Internet Protocol ("IP") address, device
                  name, operating system version, the
                  configuration of the App when using my
                  Service, the time and date of your use of
                  the Service, and other statistics.
                </Text>
                <Text></Text>
                <Text variant="title">Cookies</Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  Cookies are files with a small amount of
                  data that are commonly used as unique
                  anonymous identifiers. These are sent to
                  your browser from the websites you visit
                  and stored on your device's internal
                  memory.
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  This Service does not use these "cookies"
                  explicitly. However, the App may use third
                  party code and libraries that use
                  "cookies" to gather information and
                  improve their services. You have the
                  option to either accept or deny these
                  cookies and know when a cookie is being
                  sent to your device. If you choose to
                  refuse our cookies, you may not use some
                  portions of this Service.
                </Text>
                <Text></Text>

                <Text variant="title">
                  Service Providers
                </Text>
                <Text></Text>

                <Text variant="explanatoryl">
                  I may employ third-party companies and
                  individuals due to the following reasons:
                </Text>
                <Text></Text>

                <Text variant="explanatoryl">
                  • To facilitate our Service;
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  • To provide the Service on our behalf;
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  • To perform Service-related services; or
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  • To assist us in analyzing how our
                  Service is used.
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  I want to inform users of this Service
                  that these third parties have access to
                  your Personal Information. The reason is
                  to apply the tasks assigned to them on our
                  behalf. However, they are obligated not to
                  disclose or use the information for any
                  other purpose.
                </Text>
                <Text></Text>
                <Text variant="title">Feedback</Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  We welcome feedback, suggestions, and
                  comments for improvements to the Services
                  ("Feedback"). You can submit feedback
                  within the App.
                </Text>

                <Text></Text>
                <Text variant="title">Security</Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  We worth your trust in providing us your
                  Personal Information; thus, we strive to
                  use commercially acceptable means of
                  protecting it. But remember that no
                  transmission method over the internet or
                  electronic storage method is 100% reliable
                  and secure, and I cannot guarantee its
                  absolute security.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  Please do your part to help us. You are
                  responsible for maintaining the
                  confidentiality of your login information
                  and device identifiers and for controlling
                  access to communications between you and
                  Face Yourself at all times. Your privacy
                  settings may also be affected by changes
                  in the social media services you connect
                  to Face Yourself make to their services.
                  We are not responsible for the privacy,
                  functionality, or security measures of any
                  other organization.
                </Text>

                <Text></Text>

                <Text variant="title">
                  Links to Other Sites, Mobile Applications
                  and Services
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  This Service may contain links to other
                  sites, mobile applications, and services.
                  If you click on a third- party link, you
                  will be directed to that site. Note that I
                  do not operate these external sites.
                  Therefore, I strongly advise you to review
                  these websites' Privacy Policy, mobile
                  applications, or services. I have no
                  control over and assume no responsibility
                  for any third-party sites or services'
                  content, privacy policies, or practices.
                </Text>

                <Text></Text>

                <Text variant="title">
                  Children's Privacy
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  According to the applicable laws and
                  regulations in your country, the Service
                  offered by us is not intended for children
                  under 13 or other statutory minimum age
                  (the "Minimum Age"). Anyone under the
                  Minimum Age should not use the Service.
                  With this in mind, we do not eagerly
                  collect personal data from children under
                  the Minimum Age. If such data collection
                  is brought to us' attention, we will take
                  all the useful measures to delete the
                  corresponding data. If you believe we
                  might have any information from or about a
                  child under the Minimum Age, please
                  contact us.
                </Text>

                <Text></Text>
                <Text variant="title">
                  Age limitation for EU residents
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  Due to the EU General Data Protection
                  Regulation requirements, you shall be at
                  least 16 years old to use our Services. To
                  the extent prohibited by applicable law,
                  we do not allow the Service's use by the
                  EU residents younger than 16 years old,
                  unless with the parent's/guardian's
                  permission as provided above.
                </Text>

                <Text></Text>

                <Text variant="title">
                  Compliance with Law
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  We may be required to use and share your
                  personal information to comply with
                  applicable laws, lawful requests, and
                  legal processes to respond to government
                  authorities' subpoenas or requests.
                </Text>

                <Text></Text>

                <Text variant="title">
                  Changes to this Privacy Policy{" "}
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  We may update our Privacy Policy from time
                  to time. Thus, we advised you to review
                  this page periodically for any changes. We
                  will inform you of any changes by emailing
                  or popup services of the App the new
                  Privacy Policy on this page.
                </Text>

                <Text></Text>

                <Text variant="title">Contact Us </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  If you have any suggestions or questions
                  about my Privacy Policy, do not hesitate
                  to contact us at info@face2yourself.com.
                </Text>

                <Text></Text>
                <Text variant="title" textAlign="right">
                  Face Yourself Team
                </Text>
              </ScrollView>
            )}
            {modalText === "terms" && (
              <ScrollView>
                <Text variant="title">Terms of Use</Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  Effective as of February 01, 2021.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  Last updated February 01, 2021.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  Please read all documents carefully.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  Face Yourself is an online AI-based mobile
                  application that uniquely allows you to
                  create your personality map from your
                  facial lines.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  Tanos Technology LLC. built the Face
                  Yourself mobile application (the App) as a
                  Free app. This Service is provided by
                  Tanos Technology LLC. built the Face
                  Yourself mobile (“We”, “our” or “us”) at
                  no cost and is intended for use as is.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  Using this App, its users’ (“you” or
                  “your”) accept the following terms of use,
                  responsibility policies, and privacy
                  policy.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  The App supports multi-languages, and its
                  native language is English. There may be
                  errors due to translation in other
                  languages; by the way, our company is not
                  responsible for spelling errors, etc.,
                  other than English. We would be pleased to
                  report your bug reports via feedback or
                  email.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  By downloading or using the App, these
                  terms will automatically apply to you. You
                  should make sure, accordingly, that you
                  read them carefully before using the App.
                  You're not allowed to copy or modify any
                  part of the App or our trademarks in any
                  way. You're not allowed to attempt to
                  extract the App's source code, and you
                  also shouldn't try to translate the App
                  into other languages or make derivative
                  versions. The App itself, and all the
                  trademarks, all the figures, copyright,
                  database rights, and other intellectual
                  property rights related to it, belong to
                  our app publisher.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  The App stores and processes the personal
                  data that you have provided to our
                  Service. It's your responsibility to keep
                  your phone and access to the App secure.
                  Therefore, we recommend that you do not
                  jailbreak or root your phone, which is the
                  process of removing software restrictions
                  and limitations imposed by the official
                  operating system of your device. It could
                  make your phone vulnerable to
                  malware/viruses/malicious programs,
                  compromise your phone's security features,
                  and it could mean that the App won't work
                  correctly or at all.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  You should be aware that there are certain
                  things that our app publishers will not
                  take responsibility for; certain functions
                  of the App will require the App to have an
                  active internet connection. The connection
                  can be Wi-Fi or provided by your mobile
                  network provider. Still, our app
                  publishers cannot take responsibility for
                  the App not working at full functionality
                  if you don't have access to Wi-Fi, and you
                  don't have any of your data allowance
                  left.
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  If you're using the App outside of an area
                  with Wi-Fi, you should remember that your
                  terms of the agreement with your mobile
                  network provider will still apply. As a
                  result, you may be charged by your mobile
                  provider for the cost of data for the
                  duration of the connection while accessing
                  the App, or other third-party charges.
                  Using the App, you're accepting
                  responsibility for any such charges,
                  including roaming data charges if you use
                  the App outside of your home territory
                  (i.e., region or country) without turning
                  off data roaming. If you are not the bill
                  payer for the device you're using the App,
                  please be aware that we assume that you
                  have received permission from the bill
                  payer for using the App.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  Along the same lines, our app publishers
                  cannot always take responsibility for the
                  way you use the App, i.e., You need to
                  make sure that your device stays charged –
                  if it runs out of battery. You can't turn
                  it on to avail yourself of the Service; we
                  cannot accept responsibility.
                </Text>

                <Text></Text>
                <Text variant="explanatoryl">
                  Concerning our app publishers'
                  responsibility for your use of the App,
                  when you're using the App, it's essential
                  to bear in mind that although we endeavor
                  to ensure that it is updated and correct
                  at all times, we do rely on third parties
                  to provide information to us so that we
                  can make it available to you. Our app
                  publishers accept no liability for any
                  loss, direct or indirect, you experience
                  as a result of relying wholly on the App's
                  functionality.
                </Text>
                <Text></Text>
                <Text variant="explanatoryl">
                  At some point, we may wish to update the
                  App. The App is currently available on
                  Android & iOS & Huawei– the requirements
                  for all three systems (and for any
                  additional systems we decide to extend the
                  availability of the App to) may change,
                  and you'll need to download the updates if
                  you want to keep using the App. Our app
                  publishers do not promise that it will
                  always update the App to be relevant to
                  you and works with the Android & iOS &
                  Huawei version installed on your device.
                  However, you promise forever to accept
                  updates to the application when offered to
                  you; We may also wish to stop providing
                  the App. We may terminate use of it at any
                  time without giving notice of termination
                  to you. Unless we tell you otherwise, upon
                  any termination, (a) the rights and
                  licenses granted to you in these terms
                  will end; (b) you must stop using the App,
                  and (if needed) delete it from your
                  device.
                </Text>
                <Text></Text>
                <Text variant="title">
                  Changes to this Terms and Use
                </Text>

                <Text variant="explanatoryl">
                  We may update our Terms and Use from time
                  to time. Therefore, you are recommended to
                  review this page periodically for any
                  changes. We will notify you of any changes
                  by emailing or popup services of the App
                  the new 'Privacy Policy' or the 'Terms of
                  Use' on this page.
                </Text>
                <Text></Text>
                <Text variant="title">Contact Us</Text>
                <Text variant="explanatoryl">
                  If there are any questions regarding these
                  terms of use, you may contact us at
                  info@face2yourself.com.
                </Text>
                <Text variant="title" textAlign="right">
                  Face Yourself Team
                </Text>
              </ScrollView>
            )}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Info;
