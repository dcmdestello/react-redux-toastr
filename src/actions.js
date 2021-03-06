import {ADD_TOASTR, REMOVE_TOASTR, CLEAN_TOASTR, SHOW_CONFIRM, HIDE_CONFIRM} from './constants';
import {preventDuplication} from './utils';
import {toastrsCache} from './reducer';
import config from './config';

export function add(toastr) {
  if (config.preventDuplicates && preventDuplication(toastrsCache, toastr)) {
    return {
      type: ADD_TOASTR,
      payload: {
        ignoreToastr: true
      }
    };
  }
  return {
    type: ADD_TOASTR,
    payload: toastr
  };
}

export function clean() {
  return {
    type: CLEAN_TOASTR
  };
}

export function remove(id) {
  return {
    type: REMOVE_TOASTR,
    payload: {
      id
    }
  };
}

export function showConfirm(obj) {
  return {
    type: SHOW_CONFIRM,
    payload: obj
  };
}

export function hideConfirm() {
  return {
    type: HIDE_CONFIRM
  };
}
