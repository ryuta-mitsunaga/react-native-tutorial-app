import { StyleSheet, View } from 'react-native';
import FooterBar from '../components/FooterBar';
import MainContent from '../components/MainContent';
import {
  FOOTER_ITEM_ENUM,
  FooterInfoContext,
} from '../context/FooterInfoContext';
import { useFooterInfo } from '../hooks/useFooterInfo';
import { useTaskRepository } from '../hooks/useTaskRepository';

const index: React.FC = () => {
  const { footerInfo, selectMenu } = useFooterInfo();
  const { getTasks, createTask } = useTaskRepository();

  const onSelectMenu = (menu: FOOTER_ITEM_ENUM) => {
    const selectMenuFunc = selectMenu.get(menu);

    if (selectMenuFunc) selectMenuFunc();
  };

  // const onChangeDateTimePicker = (
  //   _: DateTimePickerEvent,
  //   selectedDate?: Date
  // ) => {
  //   if (selectedDate) {
  //     setDate(selectedDate);
  //   }
  // };

  // const gotToEditTask = (taskId: number) => {
  //   router.push(`./editTask/${taskId}`);
  // };

  // useEffect(() => {
  //   getTasks().then(res => {
  //     res.forEach(task => {
  //       addTask(task);
  //     });
  //   });
  // }, []);

  // const onClickAddTask = (task: TaskRequest) => {
  //   createTask(task).then(res => {
  //     addTask(res);
  //   });
  // };

  return (
    <View style={styles.container}>
      <FooterInfoContext.Provider value={footerInfo}>
        <View style={styles.mainContent}>
          <MainContent />
        </View>

        <FooterBar onSelectMenu={onSelectMenu} />
      </FooterInfoContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  mainContent: {
    marginBottom: 80,
  },
});

export default index;
