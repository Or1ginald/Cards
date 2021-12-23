import React from 'react';

import { useNavigate } from 'react-router-dom';

import { CustomInput } from '../customInput';

import { CustomButton, Preloader } from 'components';
import { requestStatus } from 'enum';
import { useAppSelector, useInput } from 'hooks';
import { getStatus } from 'store/selectors';
import style from 'style/Common.module.css';
import { ReturnComponentType } from 'types';

export const Card = (): ReturnComponentType => {
  const {
    value: question,
    handleValue: handleQuestion,
    // resetValue: resetQuestion,
  } = useInput('');
  const {
    value: answer,
    handleValue: handleAnswer,
    // resetValue: resetAnswer,
  } = useInput('');

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // const isDataLoaded = useAppSelector(getIsDataLoaded);
  // /* const errorMessage = useAppSelector(getErrorMessage); */
  const isLoading = useAppSelector(getStatus);
  // const errorPassMessage = useAppSelector(getErrorValidMessage);
  // const errorNetworkMessage = useAppSelector(getErrorNetworkMessage);

  const onClickHandlerCancel = (): void => {
    navigate('packCards');
  };

  // const onClickAddCard = (data: AddCardType): void => {
  //   dispatch(addCardTC(data));
  // };
  return (
    <div className={style.mainContainer}>
      {isLoading === requestStatus.loading ? (
        <Preloader />
      ) : (
        <div className={style.content}>
          <div className={style.contentWrap}>
            <h2> Card </h2>
            {/*  {errorPassMessage && (
              <span style={{ color: 'red' }}> {errorPassMessage} </span>
            )}
            {errorNetworkMessage && (
              <span style={{ color: 'red' }}> {errorNetworkMessage} </span>
            )} */}
            <CustomInput
              onChange={handleQuestion}
              value={question}
              placeholder="Question"
              typeInput="textarea"
            />
            <CustomInput
              placeholder="Answer"
              typeInput="textarea"
              value={answer}
              onChange={handleAnswer}
            />
            <div style={{ minWidth: '50px' }}>
              <CustomButton title="Cancel" onClick={onClickHandlerCancel} />
              <CustomButton title="Add card" onClick={() => {}} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
