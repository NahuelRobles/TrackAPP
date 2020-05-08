import {colorsProjects} from './styleConfig';

export const styles = {
  containerFlatListHideActions: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  containerFlatListDelete: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: colorsProjects.colorDelete,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  containerFlatListEdit: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: colorsProjects.colorEdit,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  containerFlatList: {
    borderColor: colorsProjects.borderColorProyectList,
    backgroundColor: colorsProjects.backGroundColorProyectList,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  containerTextmDesc: {
    flex: 1,
    flexDirection: 'column',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  containerHours: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
  },
  textDStyle: {
    color: 'white',
    fontSize: 15,
  },
  textTStyle: {
    color: 'white',
    fontSize: 30,
    marginBottom: 5,
  },
  relojStyle: {
    width: 100,
    height: 100,
    opacity: 0.4,
  },
  textHStyle: {
    position: 'absolute',
    color: 'white',
    fontSize: 20,
  },
  iconTrash: {
    marginRight: 30,
  },
  iconEdit: {
    marginRight: 20,
  },
};
