import React from 'react';
import MyInputText from "../Input/MyInputText";
import MySelect from "../Select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInputText placeholder={"Search post"}
                         value={filter.query}
                         onChange={e => setFilter({...filter, query:e.target.value})}/>

            <MySelect value={setFilter.sort}
                      onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                      defaultValue={"Sort"}
                      options={[
                          {value: "title", name: "Sort title",},
                          {value: "body", name: "Sort body",},
                      ]}/>
        </div>
    );
};

export default PostFilter;