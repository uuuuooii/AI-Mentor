'use client'

import { isDarkMode } from '../recoil/atom';
import { useSetRecoilState } from 'recoil';

const useDarkmode = () => {
  const setIsMode = useSetRecoilState(isDarkMode);

  const onClickModeChange = () => {
    setIsMode(true)
  }

  return { onClickModeChange }
}

export default useDarkmode