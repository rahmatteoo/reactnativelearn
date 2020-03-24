import { combineReducers } from "redux";

// function contacts(state = [], action) {
//   switch (action.type) {
//     case "ADD_CONTACT":
//       // Menambahkan kontak baru kedalam daftar
//       return [
//         ...state,
//         {
//           id: action.id,
//           name: action.name,
//           phone: action.phone
//         }
//       ];
//     case "REMOVE_CONTACT":
//       // Menghapus kontak dari daftar
//       return state.filter(contact => contact.id !== action.id);
//     default:
//       return state;
//   }
// }

// const Reducers = combineReducers({
//   contacts
//   // Reducer lain yang mungkin kamu butuhkan
// });

function dataReducers(state = [], action) {
  switch (action.type) {
    
    case "PASSING_DATA":
      // Menambahkan kontak baru kedalam daftar
      return [
        ...state,
        {
          book_id: action.book_id,
          title: action.title,
          author: action.author,
          sinopsis: action.sinopsis,
          cover: action.cover
        }
      ];
    default:
      return state;
  }
}

const Reducers = combineReducers({
  dataReducers
  // Reducer lain yang mungkin kamu butuhkan
});

export default Reducers;