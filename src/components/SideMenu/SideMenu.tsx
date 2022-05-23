import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'hooks/redux';
import { ICategory } from 'types/models/ICategory';
import CategoryGroup from 'components/CategoryGroup/CategoryGroup';
import List from 'components/List/List';

/**
 * Компонент бокового меню - каталог товаров
 */
const SideMenu = () => {
    const {categories} = useAppSelector(state => state.categoriesReducer);
    const [openedCategory, setOpenedCategory] = useState<ICategory | undefined>(categories[0]);

    const selectedCategory = (id: number) => categories.find((item: ICategory) => item.id === id);
    const handleOnMouseOverCategory = (e: any) => {
        setOpenedCategory(selectedCategory(+e.currentTarget.id));
    };

    const renderCategory = (category: ICategory) => {
        return (
            <li 
                key={category.id} 
                id={category.id.toString()} 
                onMouseOver={handleOnMouseOverCategory}
                data-bs-dismiss="offcanvas"
            >
                <Link
                    to={`/category${category.id}-${category.name.toLowerCase()}`}
                    className="list-group-item list-group-item-action"
                >{category.name}
                </Link>
            </li>
        );
    };
    const renderCategoryGroups =(category: ICategory) => {
        return (
            <CategoryGroup
                key={category.id}
                category={category}
            />
        );
    };
        
    return (
        <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
        >
            <div className="offcanvas-header">
                <h5
                    className="offcanvas-title"
                    id="offcanvasExampleLabel"
                >Каталог
                </h5>
                <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                >
                </button>
            </div>
            <div className="offcanvas-body row">
                <div className="col-4">
                    <List
                        items={categories}
                        renderItem={renderCategory}
                    /> 
                </div>
                <div className="col-8">
                    <h5 className="openedCategoryTitle mb-4">
                        {openedCategory && openedCategory.name}
                    </h5>
                    <div className="row row-cols-2">
                        {openedCategory?.children && <List
                            items={openedCategory.children}
                            renderItem={renderCategoryGroups}
                        />}
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default SideMenu;
