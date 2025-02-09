import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";
import ClickEvent from "./ClickEvent";
import InputChangedEvent from "./InputChangedEvent";
import RadioChangedEvent from "./RadioChangedEvent";

class ThisTopic extends Topic {

    constructor() {
        super("Events", [ ClickEvent, InputChangedEvent, RadioChangedEvent ]);
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Events</h2>
            <p>Displaying a UI using widgets would have limited usage if users could not interact with it.<br/>
                Each time a user clicks, moves the mouse or inputs text, an <i>Event</i> is generated by the operating system.<br/>
                That event is in turn converted into a high level event by the host software (browser or other UI).<br/>
                Applications need to install <i>event handlers</i> in order to receive these events and act accordingly.
            </p>
            <p>In the below example, we install a click handler on a &lt;div&gt; element:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/events/example.poc" />
            <br/>
            <p>Prompto supports the following events:</p>
            <ul>
                <li>ClickEvent</li>
                <li>InputChangedEvent</li>
                <li>RadioChangedEvent</li>
            </ul>
            <p><i>(this is work in progress, expect the list of supported events to evolve rapidly.</i></p>
            </React.Fragment>;
    }

}

export default new ThisTopic();