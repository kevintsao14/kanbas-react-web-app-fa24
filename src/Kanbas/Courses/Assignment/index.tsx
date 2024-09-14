export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input id="wd-search-assignment"
                placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
            </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/123">
                        A1 - ENV + HTML
                    </a>
                    <br></br>
                    Multiple Modules | <b>Not available until </b> Sep 10 at 12:00am |
                    <br></br>
                    <b>Due</b> Sep 19 at 11:59pm
                </li>
                    {/* Complete On Your Own */}
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/124">
                        A2 - CSS + BOOTSTRAP
                    </a>
                    <br></br>
                    Multiple Modules | <b>Not available until </b> Sep 17 at 12:00am |
                    <br></br>
                    <b>Due</b> Oct 17 at 11:59pm
                </li>
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/125">
                        A3 - JAVASCRIPT + REACT
                    </a>
                    <br></br>
                    Multiple Modules | <b>Not available until </b> May 6 at 12:00am |
                    <br></br>
                    <b>Due</b> May 30 at 11:59pm
                </li>
            </ul>
        </div>
    );
}
